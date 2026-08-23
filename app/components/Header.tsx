import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            S
          </div>

          <span className="text-lg font-bold tracking-tight text-slate-950">
  Student Tech Picks
</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <Link href="/categories" className="transition hover:text-blue-600">
            Categories
          </Link>

          <Link href="/laptops" className="transition hover:text-blue-600">
            Laptops
          </Link>

          <Link href="/ai-tools" className="transition hover:text-blue-600">
            AI Tools
          </Link>

          <Link href="/guides" className="transition hover:text-blue-600">
            Buying Guides
          </Link>

          <Link href="/about" className="transition hover:text-blue-600">
            About
          </Link>
        </nav>

        <Link
          href="/guides"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Explore Picks
        </Link>
      </div>
    </header>
  );
}