import { menuCategories } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { FoodCard } from "@/components/ui/FoodCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function MenuListing() {
  return (
    <SectionWrapper className="bg-white" tight>
      <Container className="space-y-16">
        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-40"
            aria-labelledby={`${category.id}-heading`}
          >
            <Reveal>
              <div className="mb-6 max-w-2xl">
                <h2
                  id={`${category.id}-heading`}
                  className="font-display text-3xl uppercase text-brand-dark sm:text-4xl"
                >
                  {category.name}
                </h2>
                <p className="mt-2 font-body text-sm text-brand-dark/70 sm:text-base">
                  {category.description}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.04}>
                  <FoodCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </SectionWrapper>
  );
}
