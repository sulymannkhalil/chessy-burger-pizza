import { sectionCopy } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function MenuHero() {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-brand-supporting pt-28 sm:pt-32"
      tight
    >
      <div
        className="pointer-events-none absolute -right-10 top-24 h-56 w-56 rounded-full bg-brand-primary/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-8 bottom-0 h-48 w-48 rounded-full bg-brand-secondary/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-accent text-xl text-brand-secondary">
              Chessy Pizza and Burger
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.92] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
              {sectionCopy.menuHero.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-brand-dark/75 sm:text-lg">
              {sectionCopy.menuHero.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </SectionWrapper>
  );
}
