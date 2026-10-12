"use client";

import { sectionCopy } from "@/data/content";
import { galleryItems } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageRevealCurtain } from "@/components/motion/ImageRevealCurtain";
import { Reveal } from "@/components/motion/Reveal";

export function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-brand-supporting/50">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-10"
            eyebrow={sectionCopy.gallery.eyebrow}
            heading={sectionCopy.gallery.heading}
            body={sectionCopy.gallery.body}
          />
        </Reveal>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <ImageRevealCurtain delay={index * 0.03} className="rounded-2xl">
                <MediaPlaceholder
                  label={item.label}
                  src={item.src}
                  alt={item.alt}
                  aspectRatio="1/1"
                  className="w-full"
                />
              </ImageRevealCurtain>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
