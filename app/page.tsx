const categories = [
  {
    icon: "💻",
    title: "Laptops",
    description: "Find the right laptop for study, work, coding and more.",
  },
  {
    icon: "📱",
    title: "Phones",
    description: "Smartphone recommendations that fit a student's budget.",
  },
  {
    icon: "📱",
    title: "Tablets",
    description: "Great tablets for notes, reading, entertainment and study.",
  },
  {
    icon: "🎧",
    title: "Accessories",
    description: "Headphones, keyboards, mice, bags and useful tech.",
  },
  {
    icon: "🤖",
    title: "AI Tools",
    description: "Discover AI tools that can genuinely help students.",
  },
  {
    icon: "💡",
    title: "Buying Guides",
    description: "Simple guides that help you make better buying decisions.",
  },
];

const laptopGuides = [
  {
    tag: "LAPTOPS",
    title: "Best Laptops for Students",
    description:
      "Our guide to choosing a laptop that can handle classes, presentations, browsing, productivity and everyday student work.",
  },
  {
    tag: "BUDGET",
    title: "Best Laptops Under ₹50,000",
    description:
      "Affordable laptops that offer the right balance of performance, battery life, portability and value.",
  },
  {
    tag: "PRODUCTIVITY",
    title: "Best Laptops for Excel & Power BI",
    description:
      "What specifications actually matter if you're working with spreadsheets, dashboards, data and productivity tools.",
  },
];

const principles = [
  {
    number: "01",
    title: "Student-first",
    description:
      "We evaluate technology based on what students actually need, not just impressive specifications.",
  },
  {
    number: "02",
    title: "Simple advice",
    description:
      "Technology shopping shouldn't require a degree in hardware. We explain what matters in plain language.",
  },
  {
    number: "03",
    title: "Value focused",
    description:
      "The most expensive product isn't automatically the best choice. We focus on getting the most for your money.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Built for students
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Smarter tech choices.
              <span className="block text-blue-600">Better student life.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Student Tech Picks helps you discover, compare and choose the
              technology and tools that are actually worth your money.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/laptops"
                className="rounded-xl bg-blue-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore laptops
              </a>
              <a
                href="#categories"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore categories
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Independent guides • Student-focused recommendations • Simple
              explanations
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="rounded-2xl bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Student Tech Picks
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  What are you looking for?
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["Laptops", "AI Tools", "Phones", "Accessories"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-5 rounded-xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold">Need help choosing?</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Start with one of our student buying guides.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs text-slate-500">Our approach</p>
              <p className="mt-1 font-bold">Useful over flashy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Explore
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything students need to navigate tech
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            From laptops and phones to AI tools and accessories, we're
            building one place for smarter student technology decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              href="#guides"
              key={category.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl transition group-hover:bg-blue-50">
                {category.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description}
              </p>
              <div className="mt-5 text-sm font-semibold text-blue-600">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured guides */}
      <section id="laptops" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Featured guides
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start with laptops
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Laptops are one of the biggest technology purchases students
                make. We're starting here with practical, student-focused
                advice.
              </p>
            </div>

            <a
              href="#guides"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              View all guides →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {laptopGuides.map((guide) => (
              <article
                key={guide.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-widest text-white">
                    {guide.tag}
                  </span>
                  <div className="mt-8 text-5xl">💻</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{guide.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {guide.description}
                  </p>
                  <a
                    href="#guides"
                    className="mt-6 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Read guide →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI tools */}
      <section id="ai-tools" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                AI for students
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Don't just use AI. Use the right AI.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                There are thousands of AI tools available today. We're
                building practical guides to help students discover which ones
                are genuinely useful for studying, research, writing,
                presentations, productivity and career preparation.
              </p>

              <a
                href="#guides"
                className="mt-7 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Explore AI tools
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Study & Research",
                "Writing",
                "Presentations",
                "Productivity",
                "Coding",
                "Career",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200"
                >
                  🤖 {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="about" className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why Student Tech Picks
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology advice without the jargon.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Our goal is simple: help students make confident technology
              decisions without wasting money on things they don't actually
              need.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.number} className="border-t-2 border-slate-900 pt-5">
                <span className="text-sm font-bold text-blue-600">
                  {principle.number}
                </span>
                <h3 className="mt-3 text-xl font-bold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section id="guides" className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose better. Spend smarter.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We're building practical technology guides for students who want
            good products without unnecessary spending.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/laptops"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explore laptop guides
            </a>
            <a
              href="#categories"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Browse categories
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="font-bold">Student Tech Picks</div>
              <p className="mt-1 text-sm text-slate-500">
                Smarter tech choices for students.
              </p>
            </div>

            <div className="flex gap-5 text-sm text-slate-500">
              <a href="#about" className="hover:text-slate-900">
                About
              </a>
              <a href="#guides" className="hover:text-slate-900">
                Guides
              </a>
              <a href="#" className="hover:text-slate-900">
                Privacy
              </a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 text-xs leading-5 text-slate-400">
            <p>
              Student Tech Picks may earn commissions from qualifying purchases
              made through affiliate links. Recommendations are created with
              students and value in mind.
            </p>
            <p className="mt-2">
              © 2026 Student Tech Picks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}