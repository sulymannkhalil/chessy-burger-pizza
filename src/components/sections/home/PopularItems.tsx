import { sectionCopy } from "@/data/content";
import { popularItems } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { FoodCard } from "@/components/ui/FoodCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function PopularItems() {
  return (
    <SectionWrapper id="popular" className="bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-8 sm:mb-10"
            eyebrow={sectionCopy.popular.eyebrow}
            heading={sectionCopy.popular.heading}
            body={sectionCopy.popular.body}
          />
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {popularItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className="flex h-full">
              <FoodCard
                item={item}
                forceIcon={false}
                disableHover
                aspectRatio="4/3"
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
