"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initial = { fullName: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let cleaned = value.replace(/[^0-9+]/g, "");
      if (cleaned.includes("+")) cleaned = `+${cleaned.replace(/\+/g, "")}`;
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: formData.fullName.trim(),
        lastName: "",
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };
      await emailjs.send("service_n6edujk", "template_cdvll1k", payload, "c4MSVbZuBc6653KeV");
      setSubmitted(true);
      setFormData(initial);
    } catch (error) {
      console.error("Email failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-full-name" className="text-sm font-medium text-slate-100">
            Full Name
          </label>
          <input
            id="contact-full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            autoComplete="name"
            className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-100">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            autoComplete="email"
            className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-phone" className="text-sm font-medium text-slate-100">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
          className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-100">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How can we help you?"
          className="contact-field w-full resize-none rounded-lg border border-slate-700 bg-[#27271f] p-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
        />
      </div>
      <button
        type="submit"
        className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#f5cd05] text-lg font-bold text-[#23200f] shadow-lg shadow-[#f5cd05]/10 transition-all hover:opacity-90"
      >
        <span>Send Message</span>
        <span className="material-symbols-outlined text-[#23200f]" aria-hidden>
          send
        </span>
      </button>
      {submitted ? (
        <p className="text-sm text-green-400">Thanks! We will get back to you shortly.</p>
      ) : null}
    </form>
  );
}
