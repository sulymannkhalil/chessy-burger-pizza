import { Clock3, MapPin, Phone, MessageCircle } from "lucide-react";
import { contact, openingHours, socialLinks } from "@/config/restaurant";
import { sectionCopy } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function LocationContact() {
  return (
    <SectionWrapper id="contact" className="bg-brand-supporting/70">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-10"
            eyebrow={sectionCopy.contact.eyebrow}
            heading={sectionCopy.contact.heading}
            body={sectionCopy.contact.body}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-brand-dark/10">
              <iframe
                title="Cheesy Pizza & Burger location on Google Maps"
                src={contact.mapsEmbedUrl}
                className="h-[350px] w-full border-0 md:h-[450px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 rounded-3xl bg-brand-dark p-6 text-white sm:p-8">
              <div>
                <div className="mb-2 flex items-center gap-2 text-brand-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                  <h3 className="font-display text-xl uppercase">Address</h3>
                </div>
                {contact.addressLines.map((line) => (
                  <p key={line} className="font-body text-sm text-white/80">
                    {line}
                  </p>
                ))}
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-brand-primary">
                  <Clock3 className="h-5 w-5" aria-hidden />
                  <h3 className="font-display text-xl uppercase">Hours</h3>
                </div>
                <ul className="space-y-2">
                  {openingHours.map((entry) => (
                    <li key={entry.days} className="font-body text-sm text-white/80">
                      <span className="font-semibold text-white">{entry.days}: </span>
                      {entry.hours}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-brand-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                  <h3 className="font-display text-xl uppercase">Phone</h3>
                </div>
                {contact.phoneHref ? (
                  <a
                    href={contact.phoneHref}
                    className="font-body text-sm text-white/85 transition hover:text-brand-primary"
                  >
                    {contact.phoneDisplay}
                  </a>
                ) : (
                  <p className="font-body text-sm text-white/80">{contact.phoneDisplay}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {contact.mapsDirectionsUrl ? (
                  <Button href={contact.mapsDirectionsUrl} size="sm">
                    Get Directions
                  </Button>
                ) : null}
                {contact.whatsappHref ? (
                  <Button
                    href={contact.whatsappHref}
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-brand-dark"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                ) : null}
              </div>

              {socialLinks.some((link) => link.available && link.href) ? (
                <ul className="mt-2 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                  {socialLinks
                    .filter((link) => link.available && link.href)
                    .map((link) => (
                      <li
                        key={link.label}
                        className="font-body text-xs uppercase tracking-wide"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-primary transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
