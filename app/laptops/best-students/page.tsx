const laptops = [
  {
    rank: "#1 PICK",
    badge: "Best overall",
    name: "Lenovo IdeaPad Slim 3",
    price: "Around ₹45,000",
    specs: "Intel Core i5 · 16GB RAM · 512GB SSD · 15.6-inch FHD",
    description:
      "A well-balanced choice for students who need a dependable laptop for classes, presentations, browsing, Excel and everyday productivity.",
    bestFor: "College work, Excel, presentations and everyday productivity",
  },
  {
    rank: "#2 PICK",
    badge: "Best budget choice",
    name: "HP 15",
    price: "Around ₹35,000",
    specs: "AMD Ryzen 3 · 8GB RAM · 512GB SSD · 15.6-inch FHD",
    description:
      "A sensible option for students who want a capable everyday laptop without spending too much.",
    bestFor: "Classes, documents, browsing and basic productivity",
  },
  {
    rank: "#3 PICK",
    badge: "Best for heavier workloads",
    name: "Acer Aspire 5",
    price: "Around ₹50,000",
    specs: "Intel Core i5 · 16GB RAM · 512GB SSD · 15.6-inch FHD",
    description:
      "A stronger option for students who expect to use heavier productivity applications and want more performance headroom.",
    bestFor: "Excel, Power BI, productivity and multitasking",
  },
];

export default function BestStudentsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Student Tech Picks · Laptop Guide
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Best laptops for students.
              <br />
              <span className="text-blue-600">
                Simple recommendations. No confusion.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Choosing a laptop shouldn't mean comparing hundreds of
              specifications. We focus on what students actually need:
              performance, reliability, battery life, portability and value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Picks */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Picks
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            The laptops we'd shortlist first
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            These recommendations cover different student budgets and use
            cases. Prices and availability can change.
          </p>
        </div>

        <div className="space-y-6">
          {laptops.map((laptop) => (
            <article
              key={laptop.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-[180px_1fr]">
                {/* Product image placeholder */}
                <div className="flex min-h-[220px] items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
                  <div className="text-6xl">💻</div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {laptop.rank}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {laptop.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {laptop.name}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600">
                    {laptop.price}
                  </p>

                  <p className="mt-4 text-sm font-medium text-slate-700">
                    {laptop.specs}
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                    {laptop.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold">Best for</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {laptop.bestFor}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="mt-5 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Check price on Amazon →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying Advice */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Before You Buy
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What actually matters in a student laptop?
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-bold">1. RAM</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  For most students, 16GB is a comfortable target if the
                  budget allows it. 8GB can work for lighter workloads.
                </p>
              </div>

              <div>
                <h3 className="font-bold">2. SSD storage</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Prefer an SSD over a traditional hard drive. 512GB is a
                  useful starting point for most students.
                </p>
              </div>

              <div>
                <h3 className="font-bold">3. Processor</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Don't choose a laptop based only on the processor name.
                  Consider the complete configuration and what you actually
                  plan to do with the machine.
                </p>
              </div>

              <div>
                <h3 className="font-bold">4. Battery and portability</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  A slightly less powerful laptop that is reliable and easy to
                  carry can be a better student laptop than a heavy machine
                  with specifications you'll never use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-sm leading-6 text-slate-500">
            Disclosure: Student Tech Picks may earn a commission from
            qualifying purchases made through affiliate links. Prices,
            specifications and availability may change. Always verify the
            current product details before purchasing.
          </p>
        </div>
      </section>
    </main>
  );
}