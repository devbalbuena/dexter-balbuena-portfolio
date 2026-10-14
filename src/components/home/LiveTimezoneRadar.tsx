"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { 
  Moon,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface TimezoneLocation {
  city: string;
  country: string;
  tz: string;
  label: string;
  flag: string;
  coverageLabel: string;
}

const LOCATIONS: TimezoneLocation[] = [
  {
    city: "Manila",
    country: "Philippines (Base)",
    tz: "Asia/Manila",
    label: "PHT (UTC+8)",
    flag: "🇵🇭",
    coverageLabel: "Active Shift: 11 PM – 6 AM",
  },
  {
    city: "New York",
    country: "United States (EST)",
    tz: "America/New_York",
    label: "EST (UTC-4/5)",
    flag: "🇺🇸",
    coverageLabel: "Overlap: 10 AM – 5 PM",
  },
  {
    city: "London",
    country: "United Kingdom (GMT)",
    tz: "Europe/London",
    label: "GMT (UTC+0/1)",
    flag: "🇬🇧",
    coverageLabel: "Overlap: 3 PM – 10 PM",
  },
  {
    city: "Sydney",
    country: "Australia (AEST)",
    tz: "Australia/Sydney",
    label: "AEST (UTC+10/11)",
    flag: "🇦🇺",
    coverageLabel: "Overlap: 1 AM – 8 AM",
  },
];

const emptySubscribe = () => () => {};

export function LiveTimezoneRadar() {
  const shouldReduceMotion = useReducedMotion();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [now, setNow] = React.useState(new Date());
  const [selectedUserTz, setSelectedUserTz] = React.useState<"EST" | "GMT" | "AEST">("EST");
  const [userHour, setUserHour] = React.useState(13); // Default 1:00 PM

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time in a given timezone
  const getTimeString = (tz: string) => {
    if (!mounted) return "--:--:--";
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
    } catch {
      return "--:--:--";
    }
  };

  const getHourInPht = () => {
    if (!mounted) return 23;
    try {
      const phtHourStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        hour12: false,
      }).format(now);
      return parseInt(phtHourStr, 10);
    } catch {
      return 23;
    }
  };

  const currentPhtHour = getHourInPht();
  const isOnDuty = currentPhtHour >= 23 || currentPhtHour < 6;

  // Calculate hours until next shift if off duty
  const hoursUntilShift = isOnDuty
    ? 0
    : currentPhtHour < 23
    ? 23 - currentPhtHour
    : 0;

  // Dynamic overlap explanation based on slider
  const getOverlapStatus = () => {
    // Dexter's working hours converted to user's time zone:
    // PHT 23:00 to 06:00 is roughly:
    // EST: 10:00 to 17:00 (10 AM - 5 PM)
    // GMT: 15:00 to 22:00 (3 PM - 10 PM)
    // AEST: 01:00 to 08:00 (1 AM - 8 AM)
    let startHour = 10;
    let endHour = 17;
    if (selectedUserTz === "GMT") {
      startHour = 15;
      endHour = 22;
    } else if (selectedUserTz === "AEST") {
      startHour = 1;
      endHour = 8;
    }

    const isOverlap = userHour >= startHour && userHour <= endHour;
    return {
      isOverlap,
      startHour,
      endHour,
    };
  };

  const overlap = getOverlapStatus();

  return (
    <section className="w-full py-16 md:py-20 bg-white border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Real-Time Availability Radar
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Zero Bottleneck Timezone Coverage
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              No waiting 24 hours for email replies. I operate on a dedicated nocturnal schedule 
              (<strong className="text-stone-900">11 PM – 6 AM PHT</strong>) to deliver real-time handoffs 
              during active US, UK, and AU business hours.
            </p>
          </div>

          {/* Live Duty Beacon Pill */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#faf6f0] border border-[#e8ded3] p-3 shadow-2xs">
              <div className="relative flex h-3.5 w-3.5">
                {isOnDuty && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                )}
                <span
                  className={`relative inline-flex h-3.5 w-3.5 rounded-full ${
                    isOnDuty ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
              </div>
              <div className="text-left font-mono">
                <span className="block text-xs font-bold text-stone-900">
                  {isOnDuty ? "Dexter is On-Duty (Active Now)" : "Next Shift in ~" + hoursUntilShift + " hrs"}
                </span>
                <span className="block text-[10px] text-stone-500">
                  Shift: 11:00 PM – 6:00 AM PHT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Digital World Clocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOCATIONS.map((loc, idx) => {
            const isDexterBase = loc.city === "Manila";
            const timeStr = getTimeString(loc.tz);

            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                  isDexterBase
                    ? "bg-[#faf5ee] border-[#8c532b]/40 shadow-xs ring-1 ring-[#8c532b]/20"
                    : "bg-white border-[#e8ded3] shadow-2xs hover:border-[#8c532b]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl" role="img" aria-label={loc.country}>
                    {loc.flag}
                  </span>
                  <Badge variant={isDexterBase ? "default" : "outline"} size="sm">
                    {loc.label}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500">{loc.city}</span>
                    {isDexterBase && (
                      <span className="text-[10px] font-mono font-bold text-[#8c532b]">
                        Base Hub
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-2xl font-black text-stone-900 tracking-tight">
                    {timeStr}
                  </div>

                  <p className="text-[11px] font-mono text-stone-600 pt-1 border-t border-[#f0e4d7]">
                    {loc.coverageLabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Overlap Simulator Slider */}
        <div className="rounded-2xl border border-[#e8ded3] bg-[#faf6f0] p-6 sm:p-8 space-y-6 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#8c532b]">
                <Zap className="h-3.5 w-3.5" />
                Interactive Overlap Simulator
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Check Real-Time Working Overlap with Your Team
              </h3>
            </div>

            {/* Timezone Selector Buttons */}
            <div className="inline-flex rounded-xl bg-white border border-[#e8ded3] p-1 shadow-2xs">
              {(["EST", "GMT", "AEST"] as const).map((tz) => (
                <button
                  key={tz}
                  type="button"
                  onClick={() => setSelectedUserTz(tz)}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer ${
                    selectedUserTz === tz
                      ? "bg-[#8c532b] text-white shadow-2xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {tz === "EST" ? "🇺🇸 US EST" : tz === "GMT" ? "🇬🇧 UK GMT" : "🇦🇺 AU AEST"}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slider */}
          <div className="space-y-3 bg-white rounded-xl p-5 border border-[#ebdccb]">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-stone-600">
                Select Your Working Hour ({selectedUserTz}):
              </span>
              <span className="font-bold text-stone-900 text-sm bg-[#faf6f0] px-3 py-1 rounded-md border border-[#ebdccb]">
                {userHour === 0 ? "12:00 AM Midnight" : userHour < 12 ? `${userHour}:00 AM` : userHour === 12 ? "12:00 PM Noon" : `${userHour - 12}:00 PM`}
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={23}
              value={userHour}
              onChange={(e) => setUserHour(parseInt(e.target.value, 10))}
              className="w-full accent-[#8c532b] cursor-ew-resize h-2 bg-stone-200 rounded-lg"
              aria-label="Select your working hour"
            />

            <div className="flex justify-between text-[10px] font-mono text-stone-600">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM (Noon)</span>
              <span>6 PM</span>
              <span>11 PM</span>
            </div>
          </div>

          {/* Overlap Result Callout */}
          <div
            className={`rounded-xl p-4 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              overlap.isOverlap
                ? "bg-emerald-50/80 border-emerald-200 text-emerald-950"
                : "bg-stone-50 border-stone-200 text-stone-700"
            }`}
          >
            <div className="flex items-start sm:items-center gap-3">
              <div
                className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
                  overlap.isOverlap
                    ? "bg-emerald-500 text-white shadow-xs"
                    : "bg-stone-200 text-stone-600"
                }`}
              >
                {overlap.isOverlap ? <Zap className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </div>
              <div className="space-y-0.5">
                <span className="block text-sm font-bold">
                  {overlap.isOverlap
                    ? "✓ Full Real-Time Sync & Handoff Window Active"
                    : "Async Mode: Tasks Handled Overnight & Ready for Morning"}
                </span>
                <span className="block text-xs font-mono opacity-80">
                  {overlap.isOverlap
                    ? `At ${userHour}:00 in ${selectedUserTz}, Dexter is actively working and ready for instant Slack/Loom handoffs.`
                    : `Outside immediate sync window (${overlap.startHour}:00 - ${overlap.endHour}:00 ${selectedUserTz}). Tasks assigned now will be completed by your next morning.`}
                </span>
              </div>
            </div>

            <div className="shrink-0 font-mono text-xs font-bold text-[#8c532b]">
              Coverage: {selectedUserTz === "EST" ? "10 AM - 5 PM EST" : selectedUserTz === "GMT" ? "3 PM - 10 PM GMT" : "1 AM - 8 AM AEST"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
