import Link from "next/link";
import { recommendedLaptops, laptops } from "./data/laptops";

export default function Home() {
  const top = [...recommendedLaptops].sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">2026 Student Technology Guide</span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">Smarter tech choices.<span className="block text-blue-600">Better student life.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Practical, student-first recommendations for laptops and technology — focused on what you actually need for classes, projects, Excel, Power BI, AI tools and everyday productivity.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/laptops/best-students" className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white hover:bg-blue-700">See laptop recommendations →</Link><a href="#how-we-pick" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold hover:bg-slate-50">How we pick</a></div>
          </div>

          <div className="mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-[22px] border border-slate-300 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
              <div className="flex h-11 items-center border-b border-slate-200 bg-slate-100 px-4">
                <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-400"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div>
                <div className="mx-auto flex h-7 w-64 items-center justify-center rounded-lg bg-white text-[11px] font-medium text-slate-400 shadow-sm">studenttechpicks.in/laptops</div>
                <div className="w-14"/>
              </div>
              <div className="bg-white p-5 sm:p-7">
                <div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">Student Tech Picks</p><h2 className="mt-1 text-xl font-bold">Find your laptop</h2></div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">2026</span></div>
                <div className="mt-5 grid gap-3">{top.slice(0, 3).map((p, i) => <div key={p.asin} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100"><img src={p.imageUrl} alt="" className="h-full w-full object-contain" loading="lazy" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{p.brand} {p.model}</p><p className="text-xs text-slate-500">{p.ram} · {p.ssd} · {p.price}</p></div><span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">#{i + 1}</span></div>)}</div>
                <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">Compare laptops by budget, RAM, weight and student-use score.</div>
              </div>
            </div>
            <div className="mx-auto mt-3 h-2 w-3/5 rounded-full bg-slate-200 blur-[1px]"/>
          </div>
        </div>
      </section>
      <section id="how-we-pick" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-blue-600">Our approach</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Useful over flashy.</h2><p className="mt-4 text-lg leading-8 text-slate-600">We judge laptops as a student would use them: performance, RAM, storage, portability, battery, display, upgradeability and price all matter.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["01","Student-first","We focus on real student workloads instead of spec-sheet bragging rights."],["02","Simple advice","No hardware jargon without explaining why it matters."],["03","Value focused","The most expensive laptop is not automatically the best laptop."]].map(([n,t,d])=><div key={n} className="rounded-2xl border border-slate-200 p-6"><p className="text-sm font-bold text-blue-600">{n}</p><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 leading-7 text-slate-600">{d}</p></div>)}</div></section>
      <section className="border-y bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-blue-600">Featured</p><h2 className="mt-2 text-3xl font-bold">Our 5 Picks</h2><p className="mt-3 text-slate-600">These are the five laptops we currently recommend most strongly for students.</p></div><Link href="/laptops/best-students" className="font-bold text-blue-600">Compare all {laptops.length} →</Link></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{top.map(p=><div key={p.asin} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-slate-50 p-2"><img src={p.imageUrl} alt="" className="h-full w-full object-contain" loading="lazy" /></div><p className="text-xs font-bold text-blue-600">OUR PICK · MBA {p.score}/10</p><h3 className="mt-2 font-bold">{p.brand} {p.model}</h3><p className="mt-2 text-sm text-slate-500">{p.price}</p></div>)}</div></div></section>
      <section className="border-t bg-white"><div className="mx-auto max-w-7xl px-6 py-8 lg:px-8"><p className="text-sm leading-6 text-slate-500"><strong>As an Amazon Associate I earn from qualifying purchases.</strong> Student Tech Picks may earn a commission from qualifying purchases made through affiliate links. Prices and availability can change.</p></div></section>
    </main>
  );
}
