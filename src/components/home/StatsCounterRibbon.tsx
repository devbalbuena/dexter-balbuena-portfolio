"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { 
  ShieldCheck, 
  Award, 
  Clock4, 
  CheckCircle2 
} from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "On-Time Handoffs",
    sublabel: "Structured daily EOD debriefs without delays",
  },
  {
    icon: Award,
    value: 4,
    suffix: " Verified",
    label: "Accredited Certifications",
    sublabel: "MOS Excel, Semrush, Google Analytics, HubSpot",
  },
  {
    icon: Clock4,
    value: 30,
    prefix: "20-",
    suffix: " hrs/wk",
    label: "Immediate Capacity",
    sublabel: "Dedicated nocturnal shift (11 PM - 6 AM PHT)",
  },
  {
    icon: CheckCircle2,
    value: 0,
    suffix: " Babysitting",
    label: "Autonomous Execution",
    sublabel: "BSIT technical logic & transparent work tracking",
  },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView || shouldReduceMotion || value === 0) {
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, shouldReduceMotion]);

  const finalDisplay = shouldReduceMotion ? value : isInView ? displayValue : 0;

  return (
    <span ref={ref} className="font-mono font-black text-2xl sm:text-3xl text-stone-900 tracking-tight">
      {prefix}
      {finalDisplay}
      {suffix}
    </span>
  );
}

export function StatsCounterRibbon() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-8 bg-[#fdfbf9] border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="rounded-2xl border border-[#e8ded3] bg-white p-5 shadow-2xs hover:shadow-md hover:border-[#8c532b] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf4ed] text-[#8c532b] group-hover:scale-110 transition-transform shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 font-semibold bg-[#faf4ed] px-2 py-0.5 rounded border border-[#f0e4d7]">
                    Verified Metric
                  </span>
                </div>

                <div className="space-y-1">
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
