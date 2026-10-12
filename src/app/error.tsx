"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-brand-supporting px-6 text-center">
      <h1 className="font-display text-4xl uppercase text-brand-dark">
        Something went wrong
      </h1>
      <p className="max-w-md font-body text-sm text-brand-dark/70">
        {error.message || "An unexpected error occurred while loading this page."}
      </p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
