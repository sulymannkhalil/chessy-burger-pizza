import { contact, openingHours, restaurant, socialLinks } from "@/config/restaurant";
import { footerNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer className="bg-brand-dark" id="footer">
      <Container className="py-10 sm:py-12 lg:py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-secondary via-[#5a1f1c] to-brand-dark px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div
              className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-brand-secondary/50 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-primary/35 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <div className="space-y-4">
                <Logo inverted className="[&_img]:h-28 [&_img]:sm:h-32 [&_img]:lg:h-36" />
                <p className="max-w-xs font-body text-sm leading-relaxed text-white/75">
                  {restaurant.description}
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-display text-base uppercase tracking-wide text-brand-primary">
                  Navigate
                </h3>
                <ul className="space-y-2.5">
                  {footerNav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        {...(item.href.endsWith(".pdf")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-body text-sm text-white/80 transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-display text-base uppercase tracking-wide text-brand-primary">
                  Contact
                </h3>
                <ul className="space-y-2.5 font-body text-sm text-white/80">
                  {contact.addressLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                  <li>
                    <a
                      href={contact.phoneHref}
                      className="transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </li>
                </ul>
                {socialLinks.some((link) => link.available && link.href) ? (
                  <ul className="mt-5 flex flex-wrap gap-4">
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

              <div>
                <h3 className="mb-4 font-display text-base uppercase tracking-wide text-brand-primary">
                  Hours
                </h3>
                <ul className="space-y-3 font-body text-sm text-white/80">
                  {openingHours.map((entry) => (
                    <li key={entry.days}>
                      <p className="font-semibold text-white">{entry.days}</p>
                      <p>{entry.hours}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="bg-brand-primary">
        <Container className="flex flex-col gap-2 py-2.5 font-body text-xs font-semibold text-brand-dark sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 {restaurant.name}. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://goodtogo.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline"
            >
              Goodtogo.pro
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
