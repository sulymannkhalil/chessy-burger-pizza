export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-brand-supporting">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-pulse rounded-2xl bg-brand-primary" />
        <p className="font-body text-sm font-semibold uppercase tracking-wide text-brand-dark/70">
          Loading Chessy…
        </p>
      </div>
    </div>
  );
}
