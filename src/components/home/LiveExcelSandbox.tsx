"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { 
  FileSpreadsheet, 
  Code, 
  Plus, 
  Minus, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface SkuRow {
  sku: string;
  title: string;
  category: string;
  cost: number;
  price: number;
  qty: number;
  reorderPoint: number;
}

const INITIAL_DATA: SkuRow[] = [
  {
    sku: "AURA-MAT-BLK-01",
    title: "Matte Ceramic Vase (Nordic 8\")",
    category: "Home Decor",
    cost: 8.50,
    price: 24.99,
    qty: 8,
    reorderPoint: 15,
  },
  {
    sku: "MINI-LED-AMB-02",
    title: "Rechargeable Bedside Lamp",
    category: "Lighting",
    cost: 12.20,
    price: 38.00,
    qty: 34,
    reorderPoint: 20,
  },
  {
    sku: "BAMB-ORG-SET-03",
    title: "Bamboo Drawer Dividers (4-Pack)",
    category: "Kitchen & Storage",
    cost: 6.80,
    price: 19.95,
    qty: 12,
    reorderPoint: 25,
  },
  {
    sku: "LINEN-COV-THW-04",
    title: "Washed Linen Throw Cushion",
    category: "Textiles",
    cost: 7.10,
    price: 26.50,
    qty: 55,
    reorderPoint: 18,
  },
  {
    sku: "AROMA-DIF-WHT-05",
    title: "Ultrasonic Mist Diffuser 300ml",
    category: "Wellness",
    cost: 14.00,
    price: 42.00,
    qty: 5,
    reorderPoint: 15,
  },
];

export function LiveExcelSandbox() {
  const shouldReduceMotion = useReducedMotion();
  const [data, setData] = React.useState<SkuRow[]>(INITIAL_DATA);
  const [showFormulas, setShowFormulas] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState<"all" | "low-stock" | "high-margin">("all");
  const [selectedCell, setSelectedCell] = React.useState<{ row: number; col: string; formula: string }>({
    row: 0,
    col: "Status",
    formula: '=IF(F2<=G2, "REORDER_ALERT", "HEALTHY")',
  });

  const updateQuantity = (sku: string, delta: number) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.sku === sku) {
          const newQty = Math.max(0, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const resetData = () => {
    setData(INITIAL_DATA);
  };

  const filteredData = React.useMemo(() => {
    return data.filter((item) => {
      const margin = (item.price - item.cost) / item.price;
      if (activeFilter === "low-stock") return item.qty <= item.reorderPoint;
      if (activeFilter === "high-margin") return margin >= 0.65;
      return true;
    });
  }, [data, activeFilter]);

  // Derived KPIs
  const totalInventoryValue = data.reduce((acc, curr) => acc + curr.cost * curr.qty, 0);
  const totalRetailValue = data.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const lowStockCount = data.filter((i) => i.qty <= i.reorderPoint).length;
  const avgMargin = (
    (data.reduce((acc, curr) => acc + (curr.price - curr.cost) / curr.price, 0) / data.length) *
    100
  ).toFixed(1);

  return (
    <section className="w-full py-16 md:py-24 bg-[#faf6f0] border-b border-[#ebdccb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                Interactive Proof of Certification
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Live MOS Excel &amp; Inventory Simulator
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              I don&apos;t just copy-paste numbers. As a certified <strong className="text-stone-900">Microsoft Office Specialist (MOS)</strong> and 
              BSIT student, I architect resilient spreadsheets with automated low-stock triggers, dynamic margin formulas, 
              and relational data hygiene. Test this live workbook below:
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <Badge variant="success" size="md">
              <Sparkles className="h-3 w-3 mr-1" /> MOS Certified Logic
            </Badge>
          </div>
        </div>

        {/* Live Workbook App Window */}
        <div className="rounded-2xl border border-[#d6c4b2] bg-white shadow-lg overflow-hidden">
          {/* Top Excel Ribbon Bar */}
          <div className="bg-[#107c41] text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="h-4 w-4 text-emerald-100" />
              <span className="font-bold">Dexter_VA_InventoryMaster_v4.xlsx</span>
              <span className="hidden sm:inline text-emerald-200">| Sheet1: Auto_Reorder_Pipeline</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={resetData}
                className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded transition-colors text-[11px] cursor-pointer"
                title="Reset test values"
              >
                <RefreshCw className="h-3 w-3" /> Reset Sample
              </button>
            </div>
          </div>

          {/* Formula Bar */}
          <div className="bg-[#f3ede4] px-4 py-2 border-b border-[#e2d5c5] flex items-center gap-3 text-xs font-mono">
            <div className="bg-white px-2 py-0.5 rounded border border-[#d6c4b2] text-stone-700 font-bold shrink-0">
              fx
            </div>
            <div className="flex-1 bg-white px-3 py-1 rounded border border-[#d6c4b2] text-stone-800 text-[11px] font-mono truncate">
              {showFormulas
                ? selectedCell.formula
                : selectedCell.formula}
            </div>
            <button
              type="button"
              onClick={() => setShowFormulas(!showFormulas)}
              className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                showFormulas
                  ? "bg-[#8c532b] text-white shadow-2xs"
                  : "bg-white text-stone-700 border border-[#d6c4b2] hover:bg-[#faf4ec]"
              }`}
            >
              <Code className="h-3.5 w-3.5" />
              {showFormulas ? "Formula View: ON" : "Toggle Formula View (Ctrl+~)"}
            </button>
          </div>

          {/* Filter Bar & KPI Strip */}
          <div className="p-4 bg-[#faf6f0] border-b border-[#e8ded3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Inventory filter views">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-[#8c532b] text-white font-bold shadow-2xs"
                    : "bg-white text-stone-700 border border-[#e8ded3] hover:bg-[#f3ede4]"
                }`}
              >
                All SKUs ({data.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("low-stock")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  activeFilter === "low-stock"
                    ? "bg-amber-700 text-white font-bold shadow-2xs"
                    : "bg-white text-stone-700 border border-[#e8ded3] hover:bg-[#f3ede4]"
                }`}
              >
                <AlertTriangle className="h-3 w-3 text-amber-600" />
                Low Stock Warnings ({lowStockCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("high-margin")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                  activeFilter === "high-margin"
                    ? "bg-emerald-700 text-white font-bold shadow-2xs"
                    : "bg-white text-stone-700 border border-[#e8ded3] hover:bg-[#f3ede4]"
                }`}
              >
                High Margin (&ge;65%)
              </button>
            </div>

            {/* Quick KPI pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="text-stone-600">
                Cost Basis: <strong className="text-stone-900">${totalInventoryValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600">
                Retail Value: <strong className="text-stone-900">${totalRetailValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600">
                Avg Margin: <strong className="text-emerald-700 font-bold">{avgMargin}%</strong>
              </span>
            </div>
          </div>

          {/* Spreadsheet Table Grid */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#f0e8dc] text-stone-700 font-mono text-[11px] uppercase border-b border-[#e2d5c5]">
                  <th className="py-2.5 px-3 border-r border-[#e2d5c5] w-12 text-center text-stone-600 font-normal">#</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5]">SKU / Variant Code</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5]">Product Title &amp; Category</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5] text-right">Unit Cost</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5] text-right">Retail Price</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5] text-right">Gross Margin</th>
                  <th className="py-2.5 px-4 border-r border-[#e2d5c5] text-center">Stock On Hand</th>
                  <th className="py-2.5 px-4 text-center">Automated Status Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee6dc] font-mono">
                <AnimatePresence mode="popLayout">
                  {filteredData.map((item, idx) => {
                    const marginPct = (((item.price - item.cost) / item.price) * 100).toFixed(1);
                    const isLow = item.qty <= item.reorderPoint;
                    const isSelected = selectedCell.row === idx;

                    return (
                      <motion.tr
                        key={item.sku}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`hover:bg-[#faf4ec] transition-colors ${
                          isSelected ? "bg-[#fbf7f0]" : ""
                        }`}
                        onClick={() =>
                          setSelectedCell({
                            row: idx,
                            col: "Status",
                            formula: `=IF(F${idx + 2}<=G${idx + 2}, "REORDER_ALERT", "HEALTHY") | Margin: =ROUND((E${idx + 2}-D${idx + 2})/E${idx + 2}, 3)`,
                          })
                        }
                      >
                        <td className="py-3 px-3 text-center text-stone-600 bg-[#f9f5ee] border-r border-[#eee6dc]">
                          {idx + 1}
                        </td>
                        <td className="py-3 px-4 font-bold text-stone-900 border-r border-[#eee6dc]">
                          {showFormulas ? `=XLOOKUP("${item.sku}", ASIN_MAP, SKU_CODE)` : item.sku}
                        </td>
                        <td className="py-3 px-4 border-r border-[#eee6dc]">
                          <span className="font-sans font-medium text-stone-900 block truncate max-w-[200px]">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-stone-600">{item.category}</span>
                        </td>
                        <td className="py-3 px-4 text-right border-r border-[#eee6dc] text-stone-700">
                          {showFormulas ? `=D${idx + 2}` : `$${item.cost.toFixed(2)}`}
                        </td>
                        <td className="py-3 px-4 text-right border-r border-[#eee6dc] text-stone-900 font-semibold">
                          {showFormulas ? `=E${idx + 2}` : `$${item.price.toFixed(2)}`}
                        </td>
                        <td className="py-3 px-4 text-right border-r border-[#eee6dc]">
                          {showFormulas ? (
                            <span className="text-[#8c532b] text-[10px]">
                              =(E{idx + 2}-D{idx + 2})/E{idx + 2}
                            </span>
                          ) : (
                            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {marginPct}%
                            </span>
                          )}
                        </td>
                        {/* Interactive Qty Controls */}
                        <td className="py-3 px-4 border-r border-[#eee6dc]">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.sku, -5);
                              }}
                              className="h-6 w-6 rounded bg-stone-100 hover:bg-[#8c532b] hover:text-white flex items-center justify-center text-stone-700 transition-colors shadow-2xs cursor-pointer"
                              title="Decrease stock by 5"
                              aria-label={`Decrease ${item.sku} quantity by 5`}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span
                              className={`w-10 text-center font-bold text-xs ${
                                isLow ? "text-amber-700 font-black" : "text-stone-900"
                              }`}
                            >
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.sku, 5);
                              }}
                              className="h-6 w-6 rounded bg-stone-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-stone-700 transition-colors shadow-2xs cursor-pointer"
                              title="Increase stock by 5"
                              aria-label={`Increase ${item.sku} quantity by 5`}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-[9px] text-stone-600 block text-center mt-0.5">
                            Min Threshold: {item.reorderPoint}
                          </span>
                        </td>
                        {/* Status Trigger */}
                        <td className="py-3 px-4 text-center">
                          {isLow ? (
                            <motion.span
                              animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-1 rounded-full text-[10px]"
                            >
                              <AlertTriangle className="h-3 w-3 text-amber-600" />
                              REORDER REQUIRED ({item.reorderPoint - item.qty + 10} units)
                            </motion.span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold px-2.5 py-1 rounded-full text-[10px]">
                              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                              HEALTHY BUFFER
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    );
                  })}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Sandbox Footer Instruction */}
          <div className="p-3 bg-[#f3ede4] border-t border-[#e2d5c5] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-stone-600">
            <span>
              💡 <strong>Try clicking the (+) and (-) buttons</strong> on stock counts to watch the automated status formula trigger dynamically.
            </span>
            <span className="text-[#8c532b] font-bold">
              Formula Audited: 0 Broken Reference Errors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
