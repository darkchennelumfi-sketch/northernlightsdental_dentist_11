"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navigation, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(95,224,191,0.12),transparent)]" />
        <div className="shell relative flex h-9 items-center justify-between text-[0.68rem] font-semibold tracking-[0.08em]">
          <span className="flex items-center gap-2 text-cream/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aurora" />
            </span>
            <span className="hidden sm:inline">Accepting new patients</span>
            <span className="sm:hidden">New patients welcome</span>
          </span>
          <div className="flex items-center gap-5 text-cream/70">
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="h-3 w-3 text-aurora" />
              {site.hoursShort}
            </span>
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-cream transition-colors hover:text-aurora"
            >
              <Phone className="h-3 w-3" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-ink/10 bg-cream/85 shadow-[0_18px_50px_-30px_rgba(6,24,29,0.35)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 backdrop-blur-md",
        )}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-6">
          <Logo id="header" />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                        isActive(pathname, item.href)
                          ? "text-ink"
                          : "text-ink/60 hover:text-ink",
                      )}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen(true)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.985 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.99 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-4"
                        >
                          <div className="aurora-border overflow-hidden rounded-[1.65rem] border border-ink/10 bg-cream/95 p-3 shadow-[0_30px_80px_-30px_rgba(6,24,29,0.45)] backdrop-blur-2xl">
                            <div className="grid grid-cols-2 gap-1">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group rounded-xl px-3.5 py-3 transition-colors hover:bg-ink/[0.05]"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <span className="flex items-center justify-between gap-3">
                                    <span className="text-sm font-semibold text-ink">
                                      {service.navTitle}
                                    </span>
                                    <ArrowUpRight className="h-3.5 w-3.5 text-ink/65 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aurora-4" />
                                  </span>
                                  <span className="mt-0.5 block text-[0.7rem] leading-snug text-ink/65">
                                    {service.category.join(" · ")}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/services"
                              className="mt-2 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink-2"
                              onClick={() => setServicesOpen(false)}
                            >
                              Explore all services
                              <ArrowUpRight className="h-4 w-4 text-aurora" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    isActive(pathname, item.href)
                      ? "text-ink"
                      : "text-ink/60 hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive(pathname, item.href) && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-aurora-3" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink xl:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/[0.06]">
                <Phone className="h-3.5 w-3.5" />
              </span>
              {site.phone}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book a visit</Link>
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/[0.05] lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <DialogPrimitive.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/55 backdrop-blur-sm data-[state=closed]:animate-[fade-out_180ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]" />
          <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[26rem] flex-col overflow-y-auto bg-ink p-6 text-cream shadow-2xl data-[state=closed]:animate-[slide-out_220ms_ease-in] data-[state=open]:animate-[slide-in_320ms_cubic-bezier(0.16,1,0.3,1)]">
            <DialogPrimitive.Title className="sr-only">
              Navigation menu
            </DialogPrimitive.Title>
            <div className="flex items-center justify-between">
              <Logo tone="light" id="mobile-menu" />
              <DialogPrimitive.Close className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </DialogPrimitive.Close>
            </div>

            <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between border-b border-white/10 py-3.5 font-display text-3xl tracking-[-0.04em] transition-colors",
                    isActive(pathname, item.href)
                      ? "text-aurora"
                      : "text-cream hover:text-aurora",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  <span className="text-xs font-sans tracking-[0.2em] text-cream/55">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="eyebrow text-cream/55">Popular services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full border border-white/12 px-3 py-1.5 text-xs font-semibold text-cream/75 transition-colors hover:border-aurora/50 hover:text-aurora"
                  >
                    {service.navTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-auto space-y-4 pt-8">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-aurora"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cream/55">
                    Call the office
                  </span>
                  <span className="text-lg font-semibold">{site.phone}</span>
                </span>
              </a>
              <p className="text-xs leading-relaxed text-cream/55">
                {site.address.full}
                <br />
                {site.hoursShort}
              </p>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Book an appointment
                </Link>
              </Button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </header>
  );
}
