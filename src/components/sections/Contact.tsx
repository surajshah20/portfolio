"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/content";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell me a little more about the opportunity"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSubmitted(true);
      reset();
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <span className="eyebrow">Contact</span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        Let's build something <span className="gradient-text">worth shipping.</span>
      </h2>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 font-mono text-xs text-gold-400">
        Available for internships & freelance opportunities
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-panel space-y-5 rounded-2xl p-7"
        >
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-mist-300">
              Name
            </label>
            <input
              {...register("name")}
              className="mt-2 w-full rounded-lg border border-mist-100/15 bg-navy-900/60 px-4 py-2.5 text-sm text-mist-100 outline-none transition focus:border-cyan-400/60"
              placeholder="Jane Recruiter"
            />
            {errors.name && <p className="mt-1 text-xs text-gold-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-mist-300">
              Email
            </label>
            <input
              {...register("email")}
              className="mt-2 w-full rounded-lg border border-mist-100/15 bg-navy-900/60 px-4 py-2.5 text-sm text-mist-100 outline-none transition focus:border-cyan-400/60"
              placeholder="jane@company.com"
            />
            {errors.email && <p className="mt-1 text-xs text-gold-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-mist-300">
              Company (optional)
            </label>
            <input
              {...register("company")}
              className="mt-2 w-full rounded-lg border border-mist-100/15 bg-navy-900/60 px-4 py-2.5 text-sm text-mist-100 outline-none transition focus:border-cyan-400/60"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-mist-300">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="mt-2 w-full resize-none rounded-lg border border-mist-100/15 bg-navy-900/60 px-4 py-2.5 text-sm text-mist-100 outline-none transition focus:border-cyan-400/60"
              placeholder="What are you building?"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-gold-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-gold-500 py-3 font-mono text-xs uppercase tracking-wider text-navy-950 font-semibold transition hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel overflow-hidden rounded-2xl"
        >
          <iframe
            title="Kathmandu, Nepal map"
            src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
            className="h-72 w-full grayscale invert-[0.92] contrast-[0.9] sm:h-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-mist-300">
        {profile.email} · {profile.phone}
      </p>
    </section>
  );
}
