"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/content";
import { Send } from "lucide-react";

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
      setTimeout(() => setSubmitted(false), 5000);
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <span className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase font-bold">
          Contact
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-100 leading-tight">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">worth shipping.</span>
        </h2>
        
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(92,231,255,0.15)]">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for roles & freelance
        </div>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-mist-100/10 bg-navy-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6"
        >
          <div>
            <label className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mist-300">
              Name
            </label>
            <input
              {...register("name")}
              className="mt-2 w-full rounded-xl border border-mist-100/10 bg-navy-950/50 px-4 py-3.5 text-sm text-mist-100 outline-none transition-all focus:border-cyan-400 focus:bg-navy-900 focus:ring-1 focus:ring-cyan-400"
              placeholder="Jane Recruiter"
            />
            {errors.name && <p className="mt-2 font-mono text-[10px] uppercase text-red-400">{errors.name.message}</p>}
          </div>

          <div>
            <label className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mist-300">
              Email
            </label>
            <input
              {...register("email")}
              className="mt-2 w-full rounded-xl border border-mist-100/10 bg-navy-950/50 px-4 py-3.5 text-sm text-mist-100 outline-none transition-all focus:border-cyan-400 focus:bg-navy-900 focus:ring-1 focus:ring-cyan-400"
              placeholder="jane@company.com"
            />
            {errors.email && <p className="mt-2 font-mono text-[10px] uppercase text-red-400">{errors.email.message}</p>}
          </div>

          <div>
            <label className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mist-300">
              Company (optional)
            </label>
            <input
              {...register("company")}
              className="mt-2 w-full rounded-xl border border-mist-100/10 bg-navy-950/50 px-4 py-3.5 text-sm text-mist-100 outline-none transition-all focus:border-cyan-400 focus:bg-navy-900 focus:ring-1 focus:ring-cyan-400"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mist-300">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-mist-100/10 bg-navy-950/50 px-4 py-3.5 text-sm text-mist-100 outline-none transition-all focus:border-cyan-400 focus:bg-navy-900 focus:ring-1 focus:ring-cyan-400"
              placeholder="What are you building?"
            />
            {errors.message && (
              <p className="mt-2 font-mono text-[10px] uppercase text-red-400">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 font-mono text-xs font-bold uppercase tracking-widest text-navy-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(92,231,255,0.4)] disabled:opacity-60 disabled:hover:shadow-none"
          >
            {isSubmitting ? "Sending..." : submitted ? "Message Sent ✓" : (
              <>
                Send Message
                <Send size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-mist-100/10 bg-navy-900/40 p-2 backdrop-blur-xl h-64 lg:h-full min-h-[400px] overflow-hidden group"
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none z-10 transition-opacity group-hover:opacity-0" />
            <iframe
              title="Kathmandu, Nepal map"
              src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
              className="absolute inset-0 h-full w-full grayscale invert-[0.95] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-mist-400"
      >
        <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors">{profile.email}</a>
        <span className="mx-4 text-mist-100/20">|</span>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400 transition-colors">{profile.phone}</a>
      </motion.div>
    </section>
  );
}