import { Suspense } from "react";
import { About } from "@/components/sections/home/About";
import { Gallery } from "@/components/sections/home/Gallery";
import { GoogleReviews } from "@/components/sections/home/GoogleReviews";
import { Hero } from "@/components/sections/home/Hero";
import { LocationContact } from "@/components/sections/home/LocationContact";
import { MenuPreview } from "@/components/sections/home/MenuPreview";
import { PopularItems } from "@/components/sections/home/PopularItems";

function ReviewsFallback() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-28 bg-white py-[clamp(4rem,8vw,7.5rem)] sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="h-40 animate-pulse rounded-2xl bg-brand-supporting/80" />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularItems />
      <MenuPreview />
      <About />
      <Gallery />
      <Suspense fallback={<ReviewsFallback />}>
        <GoogleReviews />
      </Suspense>
      <LocationContact />
    </>
  );
}
