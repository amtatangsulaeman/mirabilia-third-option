"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { centres, contact } from "@/lib/content";

type Variant = "enquiry" | "tour" | "promo" | "careers";
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const ages = ["0 to 1 years", "1 to 2 years", "2 to 3 years", "3 to 5 years"];
const roles = ["Early Childhood Teacher", "Diploma Educator", "Certificate III Educator", "Cook", "Trainee", "Other"];
const referral = ["Google search", "Facebook or Instagram", "Friend or family", "Drove past", "Other"];

const field =
  "mt-1.5 block w-full rounded-[10px] border-[1.5px] border-ink/40 bg-white px-4 py-3 text-[16px] text-ink placeholder:text-ink-soft/80 focus:border-grape focus:outline-none focus-visible:outline-3 focus-visible:outline-grape aria-[invalid=true]:border-clay";
const labelCls = "block text-[15px] font-medium";
const opt = <span className="font-normal text-ink-soft">(optional)</span>;

const copy: Record<Variant, { heading: string; button: string; thanksTitle: string; thanks: string }> = {
  enquiry: { heading: "Send us an enquiry", button: "Submit enquiry", thanksTitle: "Thank you!", thanks: "We’ve received your details. Our friendly team will be in touch soon." },
  promo: { heading: "Claim my 25% off", button: "Claim the offer", thanksTitle: "Thank you!", thanks: "We’ve received your details. Our friendly team will be in touch soon." },
  tour: { heading: "Book your tour", button: "Send my tour request", thanksTitle: "Thank you!", thanks: "We’ve got your request and will be in touch soon to find a time that suits." },
  careers: { heading: "Apply now", button: "Send application", thanksTitle: "Thanks for applying!", thanks: "We’ve received your application and will be in touch soon." },
};

export function EnquiryForm({ variant = "enquiry", defaultCentre = "", heading }: { variant?: Variant; defaultCentre?: string; heading?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const c = copy[variant];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const el of Array.from(form.elements) as HTMLInputElement[]) {
      if (el.name && el.required && !el.checkValidity()) next[el.name] = el.validationMessage || "Please fill in this field.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const body = Object.fromEntries(Array.from(new Set(data.keys())).map((k) => [k, data.getAll(k).length > 1 ? data.getAll(k) : data.get(k)]));
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, formType: variant }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "Something went wrong.");
      setStatus({ kind: "sent" });
      form.reset();
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-[14px] bg-sun-soft p-8">
        <p className="font-display text-2xl font-black">{c.thanksTitle}</p>
        <p className="mt-2 leading-relaxed">{c.thanks}</p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="btn btn-white mt-6">
          Send another
        </button>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? (
      <span id={`${name}-error`} className="mt-1 block text-[14px] font-medium text-[#b23a0f]">
        {errors[name]}
      </span>
    ) : null;
  const aria = (name: string) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${name}-error` : undefined });
  const input = (name: string, label: ReactNode, props: React.InputHTMLAttributes<HTMLInputElement> = {}, full = false) => (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={`${variant}-${name}`} className={labelCls}>{label}</label>
      <input id={`${variant}-${name}`} name={name} className={field} {...aria(name)} {...props} />
      {err(name)}
    </div>
  );
  const select = (name: string, label: ReactNode, options: string[], props: React.SelectHTMLAttributes<HTMLSelectElement> = {}, empty = "Choose one") => (
    <div>
      <label htmlFor={`${variant}-${name}`} className={labelCls}>{label}</label>
      <select id={`${variant}-${name}`} name={name} defaultValue={(props.defaultValue as string) ?? ""} className={field} {...aria(name)} required={props.required}>
        <option value="">{empty}</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {err(name)}
    </div>
  );
  const centreNames = centres.map((x) => `Mirabilia ${x.name}`);
  const dayChips = (label: string, extra?: string) => (
    <fieldset className="sm:col-span-2">
      <legend className={labelCls}>
        {label} <span className="font-normal text-ink-soft">(choose any)</span>
      </legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {[...days, ...(extra ? [extra] : [])].map((d) => (
          <label key={d} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-ink/40 bg-white px-4 has-[:checked]:border-grape has-[:checked]:bg-grape-soft">
            <input type="checkbox" name="careDays" value={d === extra ? "Flexible" : d} className="h-4 w-4 accent-grape" />
            {d === extra ? extra : d.slice(0, 3)}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <form noValidate onSubmit={onSubmit}>
      <h2 className="font-display text-2xl text-grape">{heading ?? c.heading}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {variant === "tour" ? (
          <>
            {input("name", "Your name", { required: true, autoComplete: "name" })}
            {input("phone", "Phone", { required: true, type: "tel", autoComplete: "tel" })}
            {input("email", "Email", { required: true, type: "email", autoComplete: "email" }, true)}
            {select("centre", "Centre", centreNames, { required: true, defaultValue: defaultCentre })}
            {select("ageRange", "Child’s age", [...ages, "School age"])}
            {dayChips("Days of care wanted", "Not sure yet")}
            {input("startDate", <>Preferred start date {opt}</>, { type: "date" })}
          </>
        ) : variant === "careers" ? (
          <>
            {input("firstName", "First name", { required: true, autoComplete: "given-name" })}
            {input("lastName", "Last name", { required: true, autoComplete: "family-name" })}
            {input("email", "Email", { required: true, type: "email", autoComplete: "email" })}
            {input("phone", "Phone", { required: true, type: "tel", autoComplete: "tel" })}
            {select("role", "Role you’re interested in", roles, { required: true })}
            {select("centre", "Preferred centre", centreNames, {}, "Any centre")}
          </>
        ) : (
          <>
            {input("firstName", "First name", { required: true, autoComplete: "given-name" })}
            {input("lastName", "Last name", { required: true, autoComplete: "family-name" })}
            {input("email", "Email", { required: true, type: "email", autoComplete: "email" })}
            {input("phone", "Phone", { required: true, type: "tel", autoComplete: "tel" })}
            {input("childDob", "Child’s date of birth", { type: "date" })}
            {select("ageRange", "Age range", ages)}
            {select("centre", "Centre", centreNames, { required: true, defaultValue: defaultCentre })}
            {input("careDate", "Required care date", { type: "date" })}
            {dayChips("Required care days")}
            {select("daysPerWeek", "Total days per week", ["1", "2", "3", "4", "5"])}
            {variant === "enquiry" && select("referral", "Where did you hear about us?", referral)}
          </>
        )}

        <div className="sm:col-span-2">
          <label htmlFor={`${variant}-message`} className={labelCls}>
            {variant === "tour" ? "Anything we should know?" : variant === "careers" ? "Tell us about yourself" : "Message"} {opt}
          </label>
          <textarea id={`${variant}-message`} name="message" rows={4} className={field} />
        </div>

        {variant === "careers" ? (
          <p className="text-[15px] leading-relaxed text-ink-soft sm:col-span-2">
            Please email your resume to{" "}
            <a href={`mailto:${contact.email}`} className="font-medium text-grape underline">
              {contact.email}
            </a>{" "}
            after sending this form.
          </p>
        ) : variant !== "tour" ? (
          <label className="flex gap-3 text-[14px] leading-relaxed text-ink-soft sm:col-span-2">
            <input type="checkbox" name="smsConsent" value="yes" className="mt-1 h-4 w-4 shrink-0 accent-grape" />
            I consent to receive SMS notifications, alerts and occasional marketing communication from Mirabilia. Message frequency varies. Message and data rates may apply.
          </label>
        ) : null}

        {status.kind === "error" && (
          <p role="alert" className="rounded-[10px] bg-clay/10 p-4 text-[15px] text-[#8a2c0b] sm:col-span-2">
            {status.message} Please try again, or call us on {contact.phone}.
          </p>
        )}

        <div className="sm:col-span-2">
          <button type="submit" disabled={status.kind === "sending"} className="btn btn-grape w-full disabled:opacity-60 sm:w-auto">
            {status.kind === "sending" ? "Sending…" : c.button}
          </button>
        </div>
      </div>
    </form>
  );
}
