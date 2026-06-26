import Image from "next/image";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Kiara Tours & Travels",
    description:
      "Trusted travel partner for airport pickup and drop, outstation trips, South India temple tours, Goa packages and family tours.",
    telephone: ["+91 9014825143", "+91 6301165023"],
    areaServed: "India",
    availableLanguage: ["English", "Hindi", "Telugu"],
    serviceType: [
      "Airport Pickup and Drop",
      "Outstation Trips",
      "Temple Tours",
      "Goa Packages",
      "Family Tours",
    ],
  };

  const services = [
    "Airport Pickup & Drop",
    "Outstation Trips",
    "South India Temple Tours",
    "Goa Holiday Packages",
    "Family Tour Planning",
    "24/7 Travel Assistance",
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
      image: "/WhatsApp%20Image%202026-06-26%20at%203.40.32%20PM.jpeg",
    },
    {
      name: "Goa Escapes",
      detail: "Leisure-focused coastal packages for couples, families, and group getaways.",
      image: "/WhatsApp%20Image%202026-06-26%20at%203.40.31%20PM.jpeg",
    },
    {
      name: "Family Tours",
      detail: "Safe, flexible itineraries designed for elders, children, and multi-stop holidays.",
      image: "/WhatsApp%20Image%202026-06-26%20at%203.40.31%20PM%20(1).jpeg",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <div className="travel-frame pointer-events-none absolute inset-0 opacity-70" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Kiara Tours & Travels
            </p>
            <h1 className="font-display text-3xl text-white sm:text-4xl">
              Elegant journeys, every season
            </h1>
          </div>
          <a
            href="tel:+919014825143"
            className="rounded-full border border-amber-200/30 px-5 py-3 text-sm font-semibold text-amber-50 transition hover:border-amber-100 hover:bg-white/8"
          >
            Call Now
          </a>
        </header>

        <div className="relative z-10 grid flex-1 gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:py-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-200/8 px-4 py-2 text-sm tracking-[0.2em] text-amber-100/80 uppercase">
                Trusted Travel Partner
              </p>
              <h2 className="font-display max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Airport pickup, outstation rides, temple tours, Goa packages
                and family travel with a refined touch.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Clean cars, professional drivers, affordable pricing and 24/7
                support for comfortable travel across city routes and memorable
                long-distance journeys.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+919014825143"
                className="rounded-full bg-amber-200 px-7 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                +91 9014825143
              </a>
              <a
                href="https://wa.me/916301165023"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/8"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +91 6301165023
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
                >
                  <h3 className="font-display mb-2 text-2xl text-amber-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="gallery-panel overflow-hidden rounded-[2rem]">
              <div className="relative h-80">
                <Image
                  src="/WhatsApp%20Image%202026-06-26%20at%203.40.29%20PM.jpeg"
                  alt="Kiara Tours airport pickup car at the departure terminal"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="photo-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                    Airport Transfers
                  </p>
                  <p className="font-display mt-3 text-3xl text-white">
                    On-time pickups at Bengaluru airport
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="gallery-panel rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-100/65">
                  Signature Services
                </p>
                <div className="mt-5 grid gap-3">
                  {services.map((service, index) => (
                    <div
                      key={service}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <span className="text-sm text-slate-200">{service}</span>
                      <span className="font-display text-2xl text-amber-100/70">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-sm">
                <div className="relative h-56">
                  <Image
                    src="/WhatsApp%20Image%202026-06-26%20at%203.40.30%20PM.jpeg"
                    alt="Two Kiara Tours cars ready for departures pickup service"
                    fill
                    className="object-cover"
                  />
                  <div className="photo-overlay absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-100/70">
                      Fleet
                    </p>
                    <p className="font-display mt-2 text-2xl text-white">
                      Clean cars and professional drivers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0a1117] px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Curated Routes
            </p>
            <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
              Travel experiences designed like a gallery collection
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {journeys.map((journey) => (
              <article
                key={journey.name}
                className="journey-card relative flex min-h-80 flex-col justify-end overflow-hidden rounded-[2rem] p-6"
              >
                <Image
                  src={journey.image}
                  alt={journey.name}
                  fill
                  className="object-cover"
                />
                <div className="photo-overlay absolute inset-0" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-100/65">
                  Featured
                </p>
                <h3 className="font-display relative mt-3 text-3xl text-white">
                  {journey.name}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-200/90">
                  {journey.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              Book Your Ride
            </p>
            <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
              Simple, reliable travel for every occasion
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Contact Kiara Tours & Travels for airport transfers, city pickups,
              holiday planning, family tours, temple visits and outstation
              transport.
            </p>
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

      <section className="px-6 pb-18 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                Travel Gallery
              </p>
              <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
                Real rides, real airport service, real road journeys
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-96 overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/WhatsApp%20Image%202026-06-26%20at%203.40.31%20PM%20(1).jpeg"
                alt="Kiara Tours cars parked at Bengaluru International Airport"
                fill
                className="object-cover"
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
                  src="/WhatsApp%20Image%202026-06-26%20at%203.40.31%20PM.jpeg"
                  alt="Kiara Tours sedan driving safely during a rainy night trip"
                  fill
                  className="object-cover"
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
                  src="/WhatsApp%20Image%202026-06-26%20at%203.40.32%20PM.jpeg"
                  alt="Kiara Tours vehicle on a scenic outstation highway route"
                  fill
                  className="object-cover"
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
    </main>
  );
}
