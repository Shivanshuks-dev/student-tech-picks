"use client";

import { useMemo, useState } from "react";
import type { Laptop } from "../data/laptops";

const PICK_ASINS = new Set([
  "B0FDQ2R315",
  "B0F8RCM49Y",
  "B0GD76M7QK",
  "B0DCSYTVDD",
  "B0GWQHQB4T",
]);

function scoreValue(score: number | null) {
  return score == null ? "—" : score.toFixed(1);
}

function priceValue(price: string) {
  const match = (price ?? "").match(/[\d,]+/);
  return match ? Number(match[0].replace(/,/g, "")) : null;
}

function ramValue(ram: string) {
  return Number(ram?.match(/\d+/)?.[0] || "0");
}

function ProductImage({ laptop }: { laptop: Laptop }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-[170px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
      {laptop.imageUrl && !failed ? (
        <img
          src={laptop.imageUrl}
          alt={`${laptop.brand} ${laptop.model}`}
          className="h-full w-full object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-slate-400">
          <div className="flex h-12 w-16 items-center justify-center rounded-lg border-2 border-slate-300">
            <div className="h-1.5 w-8 rounded-full bg-slate-300" />
          </div>
          <span className="mt-3 text-xs font-semibold">Product image unavailable</span>
        </div>
      )}
    </div>
  );
}

export default function LaptopExplorer({ products }: { products: Laptop[] }) {
  const [budget, setBudget] = useState("all");
  const [ram, setRam] = useState("all");
  const [sort, setSort] = useState("score");

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      const price = priceValue(p.price);
      const ramGb = ramValue(p.ram);

      const budgetOk =
        budget === "all" ||
        (price != null &&
          (budget === "50"
            ? price < 50000
            : budget === "60"
              ? price >= 50000 && price < 60000
              : budget === "70"
                ? price >= 60000 && price < 70000
                : price >= 70000));

      const ramOk = ram === "all" || (ram === "16" ? ramGb >= 16 : ramGb <= 8);
      return budgetOk && ramOk;
    });

    return [...result].sort((a, b) => {
      if (sort === "price") {
        const pa = priceValue(a.price);
        const pb = priceValue(b.price);
        if (pa == null && pb == null) return 0;
        if (pa == null) return 1;
        if (pb == null) return -1;
        return pa - pb;
      }

      if (sort === "weight") {
        return (parseFloat(a.weight) || 99) - (parseFloat(b.weight) || 99);
      }

      return (b.score ?? -1) - (a.score ?? -1);
    });
  }, [products, budget, ram, sort]);

  const recommended = filtered.filter((p) => PICK_ASINS.has(p.asin));
  const others = filtered.filter((p) => !PICK_ASINS.has(p.asin));

  function Card({ laptop }: { laptop: Laptop }) {
    const specs = [
      ["CPU", laptop.cpu],
      ["RAM", `${laptop.ram} · ${laptop.ramType}`],
      ["Storage", laptop.ssd],
      ["Display", `${laptop.display} · ${laptop.panel}`],
      ["Weight", laptop.weight],
      ["Battery", laptop.battery],
      ["Graphics", laptop.graphics],
      ["Warranty", laptop.warranty],
      ["Windows", laptop.windows],
      ["Microsoft Office", laptop.microsoftOffice],
    ];

    return (
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="grid lg:grid-cols-[220px_1fr]">
          <div className="flex min-h-[210px] flex-col items-center justify-center bg-slate-50 p-6 text-slate-900 lg:border-r lg:border-slate-200">
            <ProductImage laptop={laptop} />
            <p className="mt-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">{laptop.brand}</p>
            <p className="mt-1 text-center text-sm font-medium text-slate-700">{laptop.model}</p>
          </div>

          <div className="p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-2">
              {PICK_ASINS.has(laptop.asin) && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">OUR PICK</span>
              )}
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                MBA Score {scoreValue(laptop.score)}/10
              </span>
            </div>

            <div className="mt-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">{laptop.brand} {laptop.model}</h3>
                <p className="mt-1 text-lg font-bold text-blue-600">{laptop.price}</p>
              </div>
              <div className="text-sm text-slate-500">★ {laptop.rating} · {laptop.reviews} reviews</div>
            </div>

            <div className="mt-5 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
              {specs.map(([label, value]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                  <p className="mt-1 font-semibold text-slate-700">{value}</p>
                </div>
              ))}
            </div>

            {laptop.verdict && (
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-700">
                <strong>Why we recommend it:</strong> {laptop.verdict}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={laptop.affiliateUrl || laptop.amazonUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Buy on Amazon →
              </a>
              <span className="text-xs text-slate-400">Amazon link · We may earn from qualifying purchases.</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

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

      <p className="mb-6 text-xs text-slate-400">
        Prices shown are indicative and may differ slightly from the current Amazon price. Please check the live listing before purchasing.
      </p>

      <div className="mb-10 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-slate-600">
        Some links on this page are affiliate links. If you buy through them, we may earn a commission at no extra cost to you.
      </div>

      {recommended.length > 0 && (
        <section className="mb-12">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Our suggestions</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">Our 5 Best Picks</h2>
              <p className="mt-2 text-slate-600">Not sure which one to choose? Start with our top picks — selected for real student workloads, not just specifications.</p>
            </div>
            <span className="text-sm font-semibold text-slate-500">Pinned at the top</span>
          </div>
          <div className="space-y-5">{recommended.map((laptop) => <Card key={laptop.asin} laptop={laptop} />)}</div>
        </section>
      )}

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Complete research list</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Other researched laptops</h2>
          </div>
          <span className="text-sm text-slate-500">{others.length} results</span>
        </div>
        <div className="space-y-5">{others.map((laptop) => <Card key={laptop.asin} laptop={laptop} />)}</div>
      </section>
    </>
  );
}
