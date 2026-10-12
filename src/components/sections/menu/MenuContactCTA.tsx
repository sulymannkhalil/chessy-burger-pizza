import { sectionCopy } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function MenuContactCTA() {
  return (
    <SectionWrapper className="bg-brand-dark" tight>
      <Container className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-secondary via-brand-dark to-brand-dark px-6 py-12 sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-primary/40 blur-3xl"
          aria-hidden
        />
        <Reveal>
          <div className="relative max-w-2xl text-white">
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl">
              {sectionCopy.menuCta.heading}
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              {sectionCopy.menuCta.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#contact" size="lg">
                Find Location
              </Button>
              <Button
                href="/#contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-dark"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
