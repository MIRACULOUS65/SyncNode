import Link from "next/link";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/capabilities", label: "Capabilities" },
      { href: "/architecture", label: "Architecture" },
      { href: "/demo", label: "Interactive Demo" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/security", label: "Privacy & Security" },
      { href: "/forensics", label: "Visual Mission Forensics" },
    ],
  },
  {
    title: "Project",
    links: [{ href: "/about", label: "About / Research Context" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold tracking-[0.18em] text-white">
              SYNCNODE
            </span>
            <p className="max-w-xs text-sm leading-relaxed">
              Self-Learning, Privacy-Preserving Browser Agent
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              SIH 26171 · On-Device Visual Perception
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-6">
          <p className="max-w-3xl font-mono text-[11px] leading-relaxed tracking-wide text-neutral-500">
            Synthetic demonstration environment. Research demonstrator inspired by
            publicly documented scientific and mission-support workflow classes. Not
            affiliated with, endorsed by, or connected to any space agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
