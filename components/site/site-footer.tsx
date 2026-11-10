import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navigation, services, site } from "@/lib/site";

const socialIcons = {
  Facebook,
  Instagram,
  YouTube: Youtube,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.14),transparent_65%)]" />
        <div className="absolute -right-24 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(143,184,255,0.1),transparent_65%)]" />
        <div className="absolute inset-0 aurora-grid opacity-40" />
      </div>

      <div className="shell relative">
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-aurora">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
              Accepting new patients
            </div>
            <h2 className="max-w-2xl text-balance text-[2.6rem] leading-[0.98] tracking-[-0.045em] sm:text-[3.6rem] lg:text-[4.4rem]">
              Your next visit could be the start of a
              <span className="aurora-text italic"> healthier smile.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-cream/55">
              Professional dental care in a warm, welcoming environment for
              ages 1 to 101+. We would love to meet you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild size="lg">
              <Link href="/contact">Book an appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.9fr_1fr]">
          <div>
            <Logo tone="light" id="footer" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              {site.tagline} A Fargo dental home for children, parents, and
              grandparents alike.
            </p>
            <div className="mt-6 flex gap-2">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-cream/60 transition-all hover:-translate-y-0.5 hover:border-aurora/40 hover:text-aurora"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-cream/55">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/65 transition-colors hover:text-aurora"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/virtual-tour"
                  className="text-cream/65 transition-colors hover:text-aurora"
                >
                  Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/55">Care</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-cream/65 transition-colors hover:text-aurora"
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-aurora transition-colors hover:text-aurora-2"
                >
                  All services <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/55">Visit</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aurora" />
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed transition-colors hover:text-cream"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aurora" />
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-cream"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aurora" />
                <a
                  href={site.emailHref}
                  className="transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aurora" />
                <span className="leading-relaxed">
                  Mon–Thu 8–5
                  <br />
                  Fri 8–12
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
              <Link
                href="/pay-online"
                className="text-cream/50 transition-colors hover:text-aurora"
              >
                Pay online
              </Link>
              <Link
                href="/patient-forms"
                className="text-cream/50 transition-colors hover:text-aurora"
              >
                Patient forms
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[0.7rem] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Northern Lights Dental. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Fargo, North Dakota</span>
            <span className="h-1 w-1 rounded-full bg-cream/20" />
            <span>Care for ages 1 to 101+</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
