import { contact, openingHours, restaurant, socialLinks } from "@/config/restaurant";
import { footerNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white" id="footer">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-secondary/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-10">
        <Reveal>
          <div className="space-y-2">
            <Logo inverted className="[&_img]:h-12 [&_img]:sm:h-14 [&_img]:lg:h-14" />
            <p className="max-w-xs font-body text-sm leading-snug text-white/75">
              {restaurant.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h3 className="mb-2 font-display text-base uppercase tracking-wide text-brand-primary">
              Navigate
            </h3>
            <ul className="space-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-white/80 transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div>
            <h3 className="mb-2 font-display text-base uppercase tracking-wide text-brand-primary">
              Contact
            </h3>
            <ul className="space-y-1 font-body text-sm text-white/80">
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>{contact.phoneDisplay}</li>
              {contact.email ? <li>{contact.email}</li> : null}
            </ul>
            {socialLinks.some((link) => link.available && link.href) ? (
              <ul className="mt-2 flex flex-wrap gap-3">
                {socialLinks
                  .filter((link) => link.available && link.href)
                  .map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm font-semibold text-brand-primary transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <h3 className="mb-2 font-display text-base uppercase tracking-wide text-brand-primary">
              Hours
            </h3>
            <ul className="space-y-1.5 font-body text-sm text-white/80">
              {openingHours.map((entry) => (
                <li key={entry.days}>
                  <p className="font-semibold text-white">{entry.days}</p>
                  <p>{entry.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-3 font-body text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {restaurant.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
