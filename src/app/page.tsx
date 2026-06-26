import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";

export default function Home() {
  const cities = [
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Mumbai",
    "Delhi",
    "Pune",
    "Goa",
    "Mysuru",
    "Tirupati",
    "Coorg",
    "Vijayawada",
    "Visakhapatnam",
    "Kochi",
    "Madurai",
    "Mangaluru",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Kiara Travels",
    description:
      "Trusted travel partner for airport pickup and drop, outstation trips, car rental, South India temple tours, Goa packages and family tours across India.",
    telephone: ["+91 9014825143", "+91 6301165023"],
    url: "https://kiara-travels.vercel.app",
    logo: "https://kiara-travels.vercel.app/kiara-logo.svg",
    image: "https://kiara-travels.vercel.app/hero-airport.webp",
    areaServed: ["India", ...cities],
    availableLanguage: ["English", "Hindi", "Telugu"],
    serviceType: [
      "Airport Pickup and Drop",
      "Outstation Trips",
      "Car Rental",
      "Temple Tours",
      "Goa Packages",
      "Family Tours",
    ],
  };

  const services = [
    {
      title: "Airport Pickup & Drop",
      text: "Scheduled transfers with luggage-friendly cars and precise arrival timing.",
    },
    {
      title: "Outstation Trips",
      text: "Comfortable long-distance rides for business, family visits and weekend getaways.",
    },
    {
      title: "Temple Tours",
      text: "South India spiritual routes planned with dependable transport and flexible stops.",
    },
    {
      title: "Goa Packages",
      text: "Easy holiday movement for couples, families and small groups from airport to hotel.",
    },
  ];

  const stats = [
    { value: "24/7", label: "availability" },
    { value: "2+", label: "direct contact numbers" },
    { value: "100%", label: "focus on clean reliable rides" },
  ];

  const highlights = [
    {
      title: "Comfort First",
      text: "Clean cars, timely pickup, and courteous service for stress-free travel.",
    },
    {
      title: "Trusted Drivers",
      text: "Professional drivers who know routes, schedules, and family-friendly travel needs.",
    },
    {
      title: "Affordable Rides",
      text: "Transparent pricing for airport runs, weekend escapes, and longer outstation journeys.",
    },
  ];

  const journeys = [
    {
      name: "Temple Trails",
      detail: "South India spiritual circuits planned with calm pacing and dependable transport.",
      image: "/highway-drive.webp",
    },
    {
      name: "Goa Escapes",
      detail: "Leisure-focused coastal packages for couples, families, and group getaways.",
      image: "/rain-drive.webp",
    },
    {
      name: "Family Tours",
      detail: "Safe, flexible itineraries designed for elders, children, and multi-stop holidays.",
      image: "/gallery-airport.webp",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-12 lg:py-8">
        <div className="travel-frame pointer-events-none absolute inset-0 opacity-70" />

        <header className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="brand-badge relative h-20 w-20 overflow-hidden rounded-[1.7rem] sm:h-24 sm:w-24">
              <Image
                src="/kiara-logo.svg"
                alt="Kiara Tours & Travels logo"
                fill
                className="object-contain p-2"
                sizes="96px"
                priority
              />
            </div>
            <div className="max-w-xs">
              <p className="text-[0.66rem] uppercase tracking-[0.38em] text-amber-200/70 sm:text-[0.72rem]">
                Kiara Travels
              </p>
              <h1 className="font-display mt-1 text-[1.7rem] leading-none text-white sm:text-[2rem]">
                Elegant journeys, every season
              </h1>
            </div>
          </div>
          <a
            href="tel:+919014825143"
            className="inline-flex w-fit items-center justify-center rounded-full border border-amber-200/30 px-5 py-3 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5 hover:border-amber-100 hover:bg-white/8"
          >
            Call Now
          </a>
        </header>

        <div className="relative z-10 grid gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
          <div className="flex flex-col gap-8">
            <div className="space-y-5 reveal-up">
              <p className="inline-flex w-fit rounded-full border border-amber-300/20 bg-amber-200/8 px-4 py-2 text-[0.72rem] tracking-[0.28em] text-amber-100/80 uppercase">
                Trusted Travel Partner
              </p>
              <h2 className="font-display max-w-4xl text-[3rem] leading-[0.92] text-white sm:text-[4.5rem] lg:text-[5.75rem]">
                Airport pickup, outstation rides, temple tours, Goa packages
                and family travel with a refined touch.
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-slate-300 sm:text-[1.08rem]">
                Clean cars, professional drivers, affordable pricing and 24/7
                support for comfortable travel across city routes, airport
                transfers and long-distance journeys across India.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row reveal-up reveal-delay-1">
              <a
                href="tel:+919014825143"
                className="rounded-full bg-amber-200 px-7 py-4 text-center text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-100"
              >
                +91 9014825143
              </a>
              <a
                href="https://wa.me/916301165023"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +91 6301165023
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 reveal-up reveal-delay-2">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="glass-card rounded-[1.75rem] p-5"
                >
                  <p className="font-display text-3xl text-amber-100">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300/85">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-5 reveal-up reveal-delay-1">
            <div className="gallery-panel overflow-hidden rounded-[2rem] float-card">
              <div className="relative h-[22rem] sm:h-[28rem]">
                <Image
                  src="/hero-airport.webp"
                  alt="Kiara Tours airport pickup car at the departure terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  quality={74}
                  priority
                />
                <div className="photo-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                    Airport Transfers
                  </p>
                  <p className="font-display mt-3 max-w-sm text-[2rem] leading-tight text-white sm:text-[2.4rem]">
                    On-time pickups at Bengaluru airport
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="glass-card rounded-[1.75rem] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-100/65">
                  Support
                </p>
                <p className="font-display mt-3 text-[1.8rem] text-white">
                  24/7 response for airport and urgent travel needs
                </p>
              </article>

              <article className="glass-card rounded-[1.75rem] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-100/65">
                  Coverage
                </p>
                <p className="font-display mt-3 text-[1.8rem] text-white">
                  Local city rides, outstation routes and family packages
                </p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="services"
        className="deferred-section border-t border-white/8 bg-[#0a1117] px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Signature Services
            </p>
            <h2 className="font-display mt-4 text-[2.4rem] leading-tight text-white sm:text-[3.3rem]">
              Better hierarchy, cleaner cards and more breathing room
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-300">
              Every service is now clearer on mobile and presented with a more
              premium rhythm instead of oversized text blocks, with service
              coverage that works for airport transfers and rental travel across
              India.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card reveal-up rounded-[2rem] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-100/65">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-4 text-[2rem] leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-8 text-slate-300">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deferred-section px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Highlights
            </p>
            <h2 className="font-display mt-4 text-[2.4rem] leading-tight text-white sm:text-[3.2rem]">
              Comfort, timing and trust have to be visible at first glance
            </h2>
            <div className="mt-6 grid gap-4">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="glass-card rounded-[1.5rem] p-5"
                >
                  <h3 className="font-display text-2xl text-amber-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-center">
            <a
              href="tel:+919014825143"
              className="rounded-[1.5rem] border border-white/10 bg-[#101922] px-6 py-5 text-white transition hover:border-amber-200/40 hover:bg-[#13202b]"
            >
              <span className="block text-xs uppercase tracking-[0.3em] text-amber-100/60">
                Phone 1
              </span>
              <span className="mt-2 block text-2xl font-semibold">
                +91 9014825143
              </span>
            </a>
            <a
              href="tel:+916301165023"
              className="rounded-[1.5rem] border border-white/10 bg-[#101922] px-6 py-5 text-white transition hover:border-amber-200/40 hover:bg-[#13202b]"
            >
              <span className="block text-xs uppercase tracking-[0.3em] text-amber-100/60">
                Phone 2
              </span>
              <span className="mt-2 block text-2xl font-semibold">
                +91 6301165023
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="deferred-section px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                Travel Gallery
              </p>
              <h2 className="font-display mt-4 text-[2.4rem] leading-tight text-white sm:text-[3.2rem]">
                Real rides, real airport service, real road journeys
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-96 overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/gallery-airport.webp"
                alt="Kiara Tours cars parked at Bengaluru International Airport"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
                quality={72}
              />
              <div className="photo-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                  Airport Service
                </p>
                <p className="font-display mt-3 text-3xl text-white">
                  Reliable arrivals and departures support
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/rain-drive.webp"
                  alt="Kiara Tours sedan driving safely during a rainy night trip"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 34vw"
                  quality={70}
                />
                <div className="photo-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                    Any Weather
                  </p>
                  <p className="font-display mt-3 text-2xl text-white">
                    Safe road travel in day and night conditions
                  </p>
                </div>
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/highway-drive.webp"
                  alt="Kiara Tours vehicle on a scenic outstation highway route"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 34vw"
                  quality={70}
                />
                <div className="photo-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                    Outstation Trips
                  </p>
                  <p className="font-display mt-3 text-2xl text-white">
                    Comfortable long-distance rides across South India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="deferred-section px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-[#09131a]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal-up">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Enquiry Form
            </p>
            <h2 className="font-display mt-4 text-[2.5rem] leading-[0.95] text-white sm:text-[3.5rem]">
              Plan your ride without waiting for a callback
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
              Send your travel details directly on WhatsApp from the form. This
              works fast on mobile and keeps enquiries simple for your customers.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-100/60">
                  Primary Number
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  +91 9014825143
                </p>
              </div>
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-100/60">
                  WhatsApp
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  +91 6301165023
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card reveal-up reveal-delay-1 rounded-[2rem] p-5 sm:p-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
