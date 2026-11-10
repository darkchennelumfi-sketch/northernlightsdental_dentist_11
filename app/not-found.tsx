import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ink py-24 text-cream">
      <AuroraBackdrop />
      <div className="shell relative text-center">
        <p className="eyebrow text-aurora">404 · Off the map</p>
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[3rem] leading-[0.95] tracking-[-0.05em] sm:text-[5rem]">
          This page took a
          <span className="aurora-text italic"> wrong turn.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/55">
          The page you are looking for is not here, but your dental home still
          is. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-light">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
