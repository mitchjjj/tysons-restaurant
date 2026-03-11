import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-[#556B2F]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#556B2F]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-3">
            Message Sent!
          </h3>
          <p className="text-[#2C2C2C]/60">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm space-y-5"
        >
          <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-2">
            Send Us a Message
          </h3>
          <p className="text-sm text-[#2C2C2C]/50 mb-6">
            Have a question, want to book a private event, or just want to say hi? Fill
            out the form below.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#2C2C2C]/50 font-medium mb-1.5 block">
                Name *
              </label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="border-[#2C2C2C]/10 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]/20"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-[#2C2C2C]/50 font-medium mb-1.5 block">
                Email *
              </label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="border-[#2C2C2C]/10 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]/20"
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2C2C2C]/50 font-medium mb-1.5 block">
              Phone
            </label>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="(902) 555-0000"
              className="border-[#2C2C2C]/10 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]/20"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#2C2C2C]/50 font-medium mb-1.5 block">
              Message *
            </label>
            <Textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help you?"
              rows={5}
              className="border-[#2C2C2C]/10 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]/20 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-[#8B1A1A] hover:bg-[#6B1414] text-white rounded-full py-6 text-sm font-semibold tracking-wider uppercase"
          >
            {sending ? (
              "Sending..."
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </span>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}