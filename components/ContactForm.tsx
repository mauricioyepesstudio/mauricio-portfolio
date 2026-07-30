"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more about the project"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-line rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-gold" size={40} />
        <h3 className="font-serif italic text-2xl text-paper mt-4">
          Message sent.
        </h3>
        <p className="text-bone mt-2">
          Thank you for reaching out. I&apos;ll respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="text-sm text-bone">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-paper mt-2 transition-colors"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400 mt-2">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-bone">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-paper mt-2 transition-colors"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400 mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="company" className="text-sm text-bone">
            Company (optional)
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-paper mt-2 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="budget" className="text-sm text-bone">
            Estimated Budget (optional)
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="w-full bg-ink border-b border-line focus:border-gold outline-none py-3 text-paper mt-2 transition-colors"
          >
            <option value="">Select a range</option>
            <option value="<5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-bone">
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-paper mt-2 transition-colors resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400 mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-400"
          >
            Something went wrong. Please email hello@mauricioyepes.com
            directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 justify-center bg-paper text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300 disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
