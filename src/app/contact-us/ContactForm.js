"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const initial = { fullName: "", email: "", phone: "", message: "" };

const MESSAGE_MIN = 15;
const MESSAGE_MAX = 2000;

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const phoneOk = (v) => {
  const t = v.trim();
  if (!t) return true;
  const digits = t.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

function fieldErrors(data) {
  const name = data.fullName.trim();
  const email = data.email.trim();
  const phone = data.phone;
  const msg = data.message.trim();

  return {
    fullName: !name ? "Please enter your name." : "",
    email: !email
      ? "Please enter your email."
      : !emailOk(email)
        ? "Use a valid email address."
        : "",
    phone: !phoneOk(phone)
      ? "That doesn't look like a valid phone number."
      : "",
    message: !msg
      ? "Please enter a message."
      : msg.length < MESSAGE_MIN
        ? `Message needs at least ${MESSAGE_MIN} characters.`
        : msg.length > MESSAGE_MAX
          ? `Message can't exceed ${MESSAGE_MAX} characters.`
          : "",
  };
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initial);
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);

  const errors = useMemo(() => fieldErrors(formData), [formData]);
  const isValid =
    !errors.fullName && !errors.email && !errors.phone && !errors.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (success) setSuccess(false);
    if (submitError) setSubmitError("");
    if (name === "phone") {
      let cleaned = value.replace(/[^0-9+]/g, "");
      if (cleaned.includes("+")) cleaned = `+${cleaned.replace(/\+/g, "")}`;
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const showErr = (name) => touched[name] && errors[name];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!isValid) {
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        message: true,
      });
      return;
    }

    setSending(true);
    try {
      const payload = {
        firstName: formData.fullName.trim(),
        lastName: "",
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };
      await emailjs.send(
        "service_n6edujk",
        "template_cdvll1k",
        payload,
        "c4MSVbZuBc6653KeV",
      );
      setFormData(initial);
      setTouched({});
      setSuccess(true);
    } catch (err) {
      console.error("Email failed:", err);
      setSubmitError("Couldn't send. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-full-name"
            className="text-sm font-medium text-slate-100"
          >
            Full Name
          </label>
          <input
            id="contact-full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            autoComplete="name"
            aria-invalid={Boolean(showErr("fullName"))}
            aria-describedby={showErr("fullName") ? "err-fullName" : undefined}
            className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
          />
          {showErr("fullName") ? (
            <p id="err-fullName" className="text-sm text-red-400">
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-slate-100"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            autoComplete="email"
            aria-invalid={Boolean(showErr("email"))}
            aria-describedby={showErr("email") ? "err-email" : undefined}
            className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
          />
          {showErr("email") ? (
            <p id="err-email" className="text-sm text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-phone"
          className="text-sm font-medium text-slate-100"
        >
          Phone Number{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your phone number"
          autoComplete="tel"
          aria-invalid={Boolean(showErr("phone"))}
          aria-describedby={showErr("phone") ? "err-phone" : undefined}
          className="contact-field h-12 w-full rounded-lg border border-slate-700 bg-[#27271f] px-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
        />
        {showErr("phone") ? (
          <p id="err-phone" className="text-sm text-red-400">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-slate-100"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          maxLength={MESSAGE_MAX}
          placeholder="Enter your message"
          aria-invalid={Boolean(showErr("message"))}
          aria-describedby={showErr("message") ? "err-message" : undefined}
          className="contact-field w-full resize-none rounded-lg border border-slate-700 bg-[#27271f] p-4 text-slate-100 placeholder:text-slate-400 focus:border-[#f5cd05] focus:outline-none focus:ring-1 focus:ring-[#f5cd05]"
        />
        <p className="text-xs text-slate-500">
          {formData.message.trim().length}/{MESSAGE_MAX} · min {MESSAGE_MIN}{" "}
          characters
        </p>
        {showErr("message") ? (
          <p id="err-message" className="text-sm text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p className="text-sm text-red-400" role="alert">
          {submitError}
        </p>
      ) : null}
      {success ? (
        <p className="text-sm text-green-400" role="status">
          Sent! We'll get back to you soon.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!isValid || sending}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#f5cd05] text-lg font-bold text-[#23200f] shadow-lg shadow-[#f5cd05]/10 transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span>{sending ? "Sending…" : "Send Message"}</span>
        {!sending ? (
          <span
            className="material-symbols-outlined text-[#23200f]"
            aria-hidden
          >
            send
          </span>
        ) : null}
      </button>
    </form>
  );
}
