const laptopCategories = [
  {
    title: "Best Laptops for Students",
    description:
      "Reliable laptops for classes, presentations, browsing, productivity and everyday student work.",
    tag: "STUDENT PICKS",
    href: "/laptops/best-students",
  },
  {
    title: "Best Laptops Under ₹50,000",
    description:
      "Affordable laptops that balance performance, battery life, portability and value.",
    tag: "BUDGET",
    href: "/laptops/under-50000",
  },
  {
    title: "Best Laptops for Excel & Power BI",
    description:
      "Laptops with the right specifications for spreadsheets, dashboards, data analysis and productivity.",
    tag: "PRODUCTIVITY",
    href: "/laptops/excel-power-bi",
  },
  {
    title: "Best Laptops for Coding",
    description:
      "Good choices for programming, development environments, projects and everyday student use.",
    tag: "CODING",
    href: "/laptops/coding",
  },
  {
    title: "Best Lightweight Laptops",
    description:
      "Portable laptops for students who carry their computer between classes, libraries and home.",
    tag: "PORTABILITY",
    href: "/laptops/lightweight",
  },
  {
    title: "Best Laptops for Long Battery Life",
    description:
      "Student-friendly options for getting through classes and study sessions without constantly searching for a charger.",
    tag: "BATTERY",
    href: "/laptops/battery-life",
  },
];

export default function LaptopsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Student Tech Picks · Laptops
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Find the right laptop.
              <br />
              <span className="text-blue-600">Without the confusion.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Practical laptop recommendations for students. We focus on what
              actually matters — performance, battery life, portability,
              reliability and value for money.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Laptop Guides
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Start with what you need
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Different students need different laptops. Choose the guide that
            matches how you plan to use yours.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {laptopCategories.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="text-6xl">💻</div>
              </div>

              <div className="p-6">
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                  {category.tag}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {category.description}
                </p>

                <a
  href={category.href}
  className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
>
  Read guide →
</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying advice */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Not sure what to buy?
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Don't buy based on specifications alone.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Processor names and RAM numbers don't tell the whole story.
              Our guides explain what specifications actually matter for
              students and how to spend your budget wisely.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}