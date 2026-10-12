import { Star } from "lucide-react";
import { sectionCopy } from "@/data/content";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

function StarRow({ rating }: { rating: string }) {
  const numeric = Number.parseFloat(rating);
  const filled = Number.isFinite(numeric) ? Math.round(numeric) : 5;

  return (
    <div
      className="mb-3 flex items-center gap-1 text-brand-primary"
      aria-label={`${filled} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, starIndex) => (
        <Star
          key={starIndex}
          className={
            starIndex < filled
              ? "h-4 w-4 fill-current"
              : "h-4 w-4 fill-transparent stroke-current opacity-40"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

export async function GoogleReviews() {
  const googleReviews = await getGoogleReviews();

  return (
    <SectionWrapper id="reviews" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -left-10 top-20 h-56 w-56 rounded-full bg-brand-primary/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={sectionCopy.reviews.eyebrow}
              heading={sectionCopy.reviews.heading}
              body={sectionCopy.reviews.body}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-brand-supporting px-5 py-4 ring-1 ring-brand-dark/8">
              <p className="font-display text-3xl text-brand-dark">
                {googleReviews.overallRating}
              </p>
              <p className="mt-1 font-body text-sm text-brand-dark/70">
                {googleReviews.reviewCount} Google reviews
              </p>
            </div>
          </Reveal>
        </div>

        {googleReviews.reviews.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {googleReviews.reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-2xl bg-brand-supporting/80 p-5 ring-1 ring-brand-dark/8">
                  <StarRow rating={review.rating} />
                  <p className="flex-1 font-body text-sm leading-relaxed text-brand-dark/80">
                    {review.reviewText}
                  </p>
                  <div className="mt-4 border-t border-brand-dark/10 pt-3">
                    <p className="font-body text-sm font-semibold text-brand-dark">
                      {review.reviewerName}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal delay={0.15}>
          <div className="mt-8">
            <Button
              href={googleReviews.reviewsUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Google Reviews
            </Button>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
