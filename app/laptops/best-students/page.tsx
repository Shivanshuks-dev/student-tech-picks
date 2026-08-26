import LaptopExplorer from "../../components/LaptopExplorer";
import { laptops } from "../../data/laptops";

export const metadata = {
  title: "Best Laptops for Students 2026 | Student Tech Picks",
  description: "Research-backed laptop recommendations for students, with practical specs, MBA scores and Amazon links.",
};

export default function BestStudentsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">Student Tech Picks · 2026 Laptop Guide</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Best laptops for students.<br /><span className="text-blue-600">Shortlist first. Compare second.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">We researched these laptops specifically from a student perspective — considering performance, RAM, storage, portability, battery, display, upgradeability and value instead of chasing specifications for their own sake.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">{laptops.length} laptops researched</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Updated August 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Our research</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Compare the complete shortlist</h2>
          <p className="mt-3 leading-7 text-slate-600">Use the filters to narrow the list. The MBA score is a practical score for student workloads such as Office, Excel, Power BI, browsing, presentations and everyday multitasking.</p>
        </div>
        <LaptopExplorer products={laptops} />
      </section>

      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div><h3 className="font-bold">16GB RAM</h3><p className="mt-2 text-sm leading-6 text-slate-600">Our preferred target for students using Excel, Power BI, many browser tabs and AI tools.</p></div>
            <div><h3 className="font-bold">512GB SSD</h3><p className="mt-2 text-sm leading-6 text-slate-600">A practical baseline for coursework, projects and everyday files.</p></div>
            <div><h3 className="font-bold">Portability</h3><p className="mt-2 text-sm leading-6 text-slate-600">A laptop you can comfortably carry to class is often more useful than a heavier, faster machine.</p></div>
            <div><h3 className="font-bold">Value</h3><p className="mt-2 text-sm leading-6 text-slate-600">We don't automatically recommend the most expensive option.</p></div>
          </div>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-sm leading-6 text-slate-500"><strong>As an Amazon Associate I earn from qualifying purchases.</strong> Student Tech Picks may earn a commission from qualifying purchases made through affiliate links. This does not increase the price you pay. Prices, specifications, ratings and availability can change, so verify the current Amazon listing before purchasing.</p>
        </div>
      </section>
    </main>
  );
}
