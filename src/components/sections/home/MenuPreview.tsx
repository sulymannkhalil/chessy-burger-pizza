import Link from "next/link";
import { sectionCopy } from "@/data/content";
import {
  featuredDish,
  getMenuItemCategoryId,
  menuCategories,
} from "@/data/menu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoodImagePlaceholder } from "@/components/ui/FoodImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageRevealCurtain } from "@/components/motion/ImageRevealCurtain";
import { Reveal } from "@/components/motion/Reveal";

export function MenuPreview() {
  return (
    <SectionWrapper id="menu-preview" className="bg-brand-supporting/60">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={sectionCopy.menuPreview.eyebrow}
                heading={sectionCopy.menuPreview.heading}
                body={sectionCopy.menuPreview.body}
              />
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {menuCategories.map((category, index) => (
                <Reveal key={category.id} delay={index * 0.05}>
                  <Link
                    href={`/menu#${category.id}`}
                    className="block rounded-2xl bg-white/80 px-4 py-4 ring-1 ring-brand-dark/8 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    <p className="font-display text-lg uppercase text-brand-dark">
                      {category.name}
                    </p>
                    <p className="mt-1 font-body text-sm text-brand-dark/65">
                      {category.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Button href="/menu" size="lg" className="mt-8">
                View Full Menu
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ImageRevealCurtain className="rounded-3xl">
              <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-4 sm:p-6">
                <p className="mb-4 font-accent text-lg text-brand-primary">
                  Featured dish
                </p>
                <FoodImagePlaceholder
                  categoryId={getMenuItemCategoryId(featuredDish.id)}
                  itemName={featuredDish.name}
                  src={featuredDish.image?.src}
                  alt={featuredDish.image?.alt ?? featuredDish.name}
                  aspectRatio="4/3"
                  rounded="2xl"
                  forceIcon={false}
                  priority
                />
                <div className="mt-4 text-white">
                  <h3 className="font-display text-2xl uppercase">
                    {featuredDish.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-white/75">
                    {featuredDish.description}
                  </p>
                </div>
              </div>
            </ImageRevealCurtain>
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
