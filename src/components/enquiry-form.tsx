"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  travelType: string;
  travelDate: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  travelType: "Airport Pickup",
  travelDate: "",
  message: "",
};

const primaryWhatsappNumber = "919014825143";

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const fieldClassName =
    "form-field h-14 w-full rounded-[1.2rem] border border-white/10 bg-[#0d161e] px-4 text-white outline-none transition focus:border-amber-200/50";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Hello Kiara Tours & Travels,",
      "",
      "I would like to enquire about a trip.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Travel Type: ${form.travelType}`,
      `Travel Date: ${form.travelDate || "Not specified"}`,
      `Details: ${form.message || "No extra details"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));

    const whatsappUrl = `https://wa.me/${primaryWhatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            Your Name
          </span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className={fieldClassName}
            placeholder="Enter your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            Phone Number
          </span>
          <input
            required
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            className={fieldClassName}
            placeholder="+91"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            Travel Type
          </span>
          <select
            value={form.travelType}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                travelType: event.target.value,
              }))
            }
            className={`${fieldClassName} appearance-none pr-12`}
          >
            <option>Airport Pickup</option>
            <option>Airport Drop</option>
            <option>Outstation Trip</option>
            <option>Temple Tour</option>
            <option>Goa Package</option>
            <option>Family Tour</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            Travel Date
          </span>
          <input
            type="date"
            value={form.travelDate}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                travelDate: event.target.value,
              }))
            }
            className={`${fieldClassName} form-date pr-4`}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
          Trip Details
        </span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="form-field min-h-36 w-full rounded-[1.2rem] border border-white/10 bg-[#0d161e] px-4 py-4 text-white outline-none transition focus:border-amber-200/50"
          placeholder="Pickup location, drop location, number of passengers, or anything else"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-amber-200 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
        >
          Send Enquiry on WhatsApp
        </button>
        <p className="text-sm leading-7 text-slate-300">
          Your enquiry will open on the main WhatsApp number by default.
        </p>
      </div>
    </form>
  );
}
