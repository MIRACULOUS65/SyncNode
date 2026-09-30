import { SectionHeader } from "@/components/ui/SectionHeader";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </div>
      </section>
      <div className="flex flex-col gap-0">{children}</div>
    </>
  );
}

export function PageSection({
  title,
  kicker,
  children,
  dark,
  id,
}: {
  title?: string;
  kicker?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={dark ? "bg-neutral-950 py-16 text-white sm:py-20" : "py-16 sm:py-20"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || kicker) && (
          <div className="mb-10 flex flex-col gap-2">
            {kicker && (
              <span
                className={
                  "font-mono text-[10px] uppercase tracking-[0.22em] " +
                  (dark ? "text-neutral-500" : "text-neutral-500")
                }
              >
                {kicker}
              </span>
            )}
            {title && (
              <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
