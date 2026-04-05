"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  { value: "executive-coaching", label: "Executive Coaching" },
  { value: "group-coaching", label: "Group Coaching" },
  { value: "leadership-workshops", label: "Leadership Workshops" },
  { value: "other", label: "Other" },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [service, setService] = useState<string | null>(null);

  function validate(formData: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length === 0) {
      errs.name = "Please enter your name.";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!message || message.trim().length === 0) {
      errs.message = "Please enter a message.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // MVP: log form data to console
    console.log("Contact form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service,
      message: formData.get("message"),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-cream p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <svg
            className="h-8 w-8 text-gold-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-charcoal">
          Thank You!
        </h3>
        <p className="mt-3 text-charcoal/70">
          We will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          className="h-10"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className="h-10"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      {/* Phone (optional) */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="h-10"
        />
      </div>

      {/* Service Interest */}
      <div className="space-y-2">
        <Label>Service Interest</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="w-full h-10">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your goals and how we can help..."
          rows={5}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-gold text-charcoal font-semibold hover:bg-gold-dark h-11 text-base"
      >
        Send Message
      </Button>
    </form>
  );
}
