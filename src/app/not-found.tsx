import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-brand-supporting px-6 text-center">
      <p className="font-accent text-xl text-brand-secondary">404</p>
      <h1 className="font-display text-5xl uppercase text-brand-dark">
        Page not found
      </h1>
      <p className="max-w-md font-body text-brand-dark/70">
        That route doesn&apos;t exist. Head back home to keep browsing Chessy.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/">Back Home</Button>
      </div>
    </div>
  );
}
