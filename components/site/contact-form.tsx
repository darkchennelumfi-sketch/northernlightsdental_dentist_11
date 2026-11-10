"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus({ state: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok: boolean;
        message: string;
      };

      if (!response.ok || !data.ok) {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please call us instead.",
        });
        return;
      }

      setStatus({
        state: "success",
        message:
          "Thank you — your request is on its way. We will be in touch soon.",
      });
      reset();
    } catch {
      setStatus({
        state: "error",
        message: `We could not send that just now. Please call ${site.phone} and we will help.`,
      });
    }
  };

  if (status.state === "success") {
    return (
      <div
        className={cn(
          "flex min-h-[28rem] flex-col items-center justify-center rounded-[2rem] border border-aurora-3/25 bg-white/70 p-8 text-center shadow-[0_30px_80px_-50px_rgba(6,24,29,0.4)]",
          className,
        )}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-aurora/20 text-aurora-4">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-3xl text-ink">Message received</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
          {status.message}
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm text-ink/65">
          <span>Prefer to talk? Call {site.phone}.</span>
          <a
            href={site.phoneHref}
            className="font-semibold text-aurora-4 transition-colors hover:text-ink"
          >
            Call the office
          </a>
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-7"
          onClick={() => setStatus({ state: "idle" })}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-[0_30px_80px_-50px_rgba(6,24,29,0.4)] sm:p-8",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-ink/60">Appointment request</p>
          <h2 className="mt-2 text-[1.9rem] leading-none text-ink">
            Tell us how we can help
          </h2>
        </div>
        <span className="hidden rounded-full border border-aurora-3/25 bg-aurora/10 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-ink/60 sm:inline-flex">
          New patients welcome
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-coral-2">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-coral-2">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 555-0100"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-coral-2">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            placeholder="New patient visit"
            aria-invalid={Boolean(errors.subject)}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-coral-2">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            placeholder="What would you like us to know?"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-coral-2">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {status.state === "error" && (
        <p className="mt-4 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-xs text-ink/70">
          {status.message}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.68rem] leading-relaxed text-ink/60">
          Please do not include sensitive medical details. For urgent dental
          needs, call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-ink/60 underline-offset-2 hover:underline"
          >
            {site.phone}
          </a>
          .
        </p>
        <Button type="submit" disabled={isSubmitting} className="min-w-40">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send request
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
