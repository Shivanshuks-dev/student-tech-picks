"use client";

import { useMemo, useState } from "react";
import type { Laptop } from "../data/laptops";

function scoreValue(score: number | null) {
  return score == null ? "—" : score.toFixed(1);
}

export default function LaptopExplorer({ products }: { products: Laptop[] }) {
  const [budget, setBudget] = useState("all");
  const [ram, setRam] = useState("all");
  const [sort, setSort] = useState("score");

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      const price = Number((p.price ?? "").match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0");
      const ramGb = Number(p.ram.match(/\d+/)?.[0] || "0");
      const budgetOk = budget === "all" || (budget === "50" ? price < 50000 : budget === "60" ? price < 60000 : budget === "70" ? price < 70000 : price >= 70000);
      const ramOk = ram === "all" || (ram === "16" ? ramGb >= 16 : ramGb <= 8);
      return budgetOk && ramOk;
    });

    return [...result].sort((a, b) => {
      const affiliateDiff = Number(Boolean(b.affiliateUrl)) - Number(Boolean(a.affiliateUrl));
      if (affiliateDiff !== 0) return affiliateDiff;
      if (sort === "price") {
        const pa = Number((a.price ?? "").match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0");
        const pb = Number((b.price ?? "").match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0");
        return pa - pb;
      }
      if (sort === "weight") return (parseFloat(a.weight) || 99) - (parseFloat(b.weight) || 99);
      return (b.score ?? -1) - (a.score ?? -1);
    });
  }, [products, budget, ram, sort]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm font-semibold text-slate-700">
            Budget
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-medium outline-none focus:border-blue-500">
              <option value="all">All prices</option>
              <option value="50">Under ₹50,000</option>
              <option value="60">₹50,000–₹59,999</option>
              <option value="70">₹60,000–₹69,999</option>
              <option value="high">₹70,000+</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            RAM
            <select value={ram} onChange={(e) => setRam(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-medium outline-none focus:border-blue-500">
              <option value="all">Any RAM</option>
              <option value="16">16GB or more</option>
              <option value="8">8GB or less</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-medium outline-none focus:border-blue-500">
              <option value="score">MBA score</option>
              <option value="price">Lowest price</option>
              <option value="weight">Lightest</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-slate-600">Some links on this page are affiliate links. If you buy through them, we may earn a commission at no extra cost to you.</div>

      <div className="mb-5 flex items-center justify-between text-sm text-slate-500">
        <span>Showing {filtered.length} of {products.length} researched laptops</span>
        <span>⭐ MBA score is our student-use score</span>
      </div>

      <div className="space-y-5">
        {filtered.map((laptop, index) => {
          const isAffiliate = Boolean(laptop.affiliateUrl);
          return (
            <article key={laptop.asin || laptop.model} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="grid lg:grid-cols-[220px_1fr]">
                <div className="flex min-h-[210px] flex-col items-center justify-center bg-slate-950 p-6 text-white">
                  <div className="flex h-[170px] w-full items-center justify-center rounded-xl bg-white p-3">{laptop.imageUrl ? <img src={laptop.imageUrl} alt={`${laptop.brand} ${laptop.model}`} className="h-full w-full object-contain" loading="lazy" /> : <span className="text-5xl">💻</span>}</div>
                  <p className="mt-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">{laptop.brand}</p>
                  <p className="mt-1 text-center text-sm font-medium text-slate-200">{laptop.model}</p>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    {isAffiliate && <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OUR PICK</span>}
                    
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">MBA Score {scoreValue(laptop.score)}/10</span>
                  </div>

                  <div className="mt-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">{laptop.brand} {laptop.model}</h3>
                      <p className="mt-1 text-lg font-bold text-blue-600">{laptop.price}</p>
                    </div>
                    <div className="text-sm text-slate-500">★ {laptop.rating} · {laptop.reviews} reviews</div>
                  </div>

                  <div className="mt-5 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    {[['CPU', laptop.cpu], ['RAM', `${laptop.ram} · ${laptop.ramType}`], ['Storage', laptop.ssd], ['Display', `${laptop.display} · ${laptop.panel}`], ['Weight', laptop.weight], ['Battery', laptop.battery], ['Graphics', laptop.graphics], ['Warranty', laptop.warranty]].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                        <p className="mt-1 font-semibold text-slate-700">{value}</p>
                      </div>
                    ))}
                  </div>

                  {laptop.verdict && <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-700"><strong>Our take:</strong> {laptop.verdict}</div>}

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a href={isAffiliate ? laptop.affiliateUrl : laptop.amazonUrl} target="_blank" rel="nofollow sponsored noopener" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                      {isAffiliate ? "Check price on Amazon →" : "View Amazon listing →"}
                    </a>
                    <span className="text-xs text-slate-400">{isAffiliate ? "Amazon link · sponsored" : "Direct product link"}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
