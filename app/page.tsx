"use client";

import Image from "next/image";
import { useState } from "react";

type ServiceOption = {
  option: string;
  price: string;
};

type ServiceEntry = {
  name: string;
  description?: string;
  options: ServiceOption[];
};

type ServiceCategory = {
  title: string;
  price: string;
  text: string;
  items: ServiceEntry[];
};

const services: ServiceCategory[] = [
  {
    title: "Chemické čištění interiéru",
    price: "od 990 Kč",
    text: "Důkladné čištění sedadel, koberců a plastových částí interiéru s odstraněním nečistot, skvrn a zápachu.",
    items: [
      {
        name: "Základní čištění interiéru",
        description: "Vyčištění sedadel, koberců a plastů, odstranění běžných nečistot.",
        options: [
          {
            option: "Malý automobil",
            price: "990 Kč",
          },
          {
            option: "SUV / MPV",
            price: "2 000 Kč",
          },
        ],
      },
    ],
  },
  {
    title: "Mytí exteriéru",
    price: "od 790 Kč",
    text: "Šetrné ruční mytí exteriéru vozidla včetně kol a detailů s použitím profesionální kosmetiky.",
    items: [],
  },
  {
    title: "Leštění laku",
    price: "od 5 990 Kč",
    text: "Strojní leštění laku pro odstranění mikroškrábanců, hologramů a navrácení hlubokého lesku karoserie.",
    items: [],
  },
  {
    title: "Skla a světla",
    price: "od 990 Kč",
    text: "Kompletní péče o skla a světlomety – hloubkové čištění, odstranění nánosů a zašlého filmu. Volitelně renovace světlometů pro lepší viditelnost a estetiku.",
    items: [],
  },
  {
    title: "Keramická ochrana",
    price: "od 9 999 Kč",
    text: "Aplikace keramického povlaku, který chrání lak před nečistotami, UV zářením a dodává dlouhotrvající lesk.",
    items: [],
  },
  {
    title: "Ochranná PPF fólie",
    price: "od 27 990 Kč",
    text: "Instalace transparentní ochranné fólie na exponované části karoserie proti kamínkům a poškrábání.",
    items: [],
  },
  {
    title: "Anti-déšť",
    price: "od 1 099 Kč",
    text: "Hydrofobní ochrana, která odpuzuje vodu a nečistoty. Zlepšuje výhled za deště a usnadňuje mytí",
    items: [],
  },
];

const packages = [
  {
    name: "Start",
    price: "6 900 Kč",
    items: ["Mytí exteriéru", "Vysátí interiéru", "Ošetření plastů", "1stupňové leštění"],
  },
  {
    name: "Premium",
    price: "14 900 Kč",
    items: ["2stupňová korekce", "Keramická ochrana 12 měsíců", "Hloubkové čištění interiéru", "Detail kol a motorového prostoru"],
  },
  {
    name: "Signature",
    price: "od 24 900 Kč",
    items: ["Vícekroková korekce", "Keramická ochrana 36 měsíců", "Impregnace textilu/kůže", "Prioritní termín a pickup service"],
  },
];

const names = [
  "Jan N.", "Petra K.", "Marek D.", "Lucie V.", "Tomáš H.", "Eva R.", "Daniel S.", "Adéla M.", "Pavel B.",
  "Karolína T.", "Martin Č.", "Veronika P.", "David L.", "Michaela F.", "Roman G.", "Nikola Z.", "Filip J.", "Barbora A.",
];

const reviewTexts = [
  "Auto vypadá lépe než při převzetí z showroomu. Precizní práce.",
  "Skvělá komunikace, jasná cena a fantastický výsledek.",
  "Interiér je jako nový, odstranili i staré skvrny a zápach.",
  "Keramika drží perfektně, voda okamžitě stéká.",
  "Velmi profesionální přístup a detailní předání vozu.",
  "Nejlepší detailing v Praze, určitě se vrátím znovu.",
];

const reviews = Array.from({ length: 36 }, (_, i) => ({
  name: names[i % names.length],
  text: reviewTexts[i % reviewTexts.length],
}));

const navItems = [
  { href: "#about", label: "O nás" },
  { href: "#services", label: "Služby" },
  { href: "#packages", label: "Balíčky" },
  { href: "#contacts", label: "Kontakty" },
  { href: "#works", label: "Galerie" },
];

export default function Home() {
  const [openServiceCategory, setOpenServiceCategory] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="site-bg" aria-hidden />
      <header className="site-header sticky top-0 z-40 border-b border-white/10">
        <span className="site-header-flag site-header-flag--left" aria-hidden>
          <span className="site-header-flag__top" />
          <span className="site-header-flag__bottom" />
        </span>
        <span className="site-header-flag site-header-flag--right" aria-hidden>
          <span className="site-header-flag__top" />
          <span className="site-header-flag__bottom" />
        </span>
        <div className="site-header__inner section-wrap flex items-center justify-between py-4">
          <a href="#" className="site-brand transition-colors duration-300 hover:text-accent">
              <Image
                src="/images/urban-logo-user.png"
                alt=""
                width={92}
                height={92}
                className="site-brand__logo"
              />
            <span className="site-brand__text-wrap">
              <span className="site-brand__text title-font text-3xl leading-none text-foreground">URBAN DETAILING</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav-link transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://urban-detailing.reservio.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-red-800"
          >
            Rezervace
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="section-wrap pb-20 pt-16 sm:pb-24 sm:pt-24">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">Premium detailing studio | Brno</p>
          <h1 className="title-font max-w-4xl text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Vaše auto může vypadat jako nové
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
            Specializujeme se na špičkový auto detailing, korekce laku a keramickou ochranu pro vozy, které si zaslouží maximální péči.
          </p>
          <p className="mt-6 max-w-2xl text-base font-bold text-white/92">
            Máte-li otázky nebo speciální přání k rezervaci, klidně nás kontaktujte zde:
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+420602561013"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Zavolat
            </a>
            <a
              href="https://wa.me/420602561013"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-red-800"
            >
              WhatsApp
            </a>
          </div>
        </section>
        <section id="about" className="section-wrap border-t border-white/10">
          <h2 className="section-title-underline title-font text-4xl sm:text-6xl">O nás</h2>
          <div className="card-base mt-8 space-y-4">
            <p className="text-base text-white/85">
              URBAN DETAILING — detailing v Brně
            </p>
            <p className="text-sm leading-7 text-white/78">
              Vybrali jste si auto srdcem i očima — podle barvy, výbavy, kol i toho, jak působí interiér. Naším cílem je jednoduchá věc: pomoci vám udržet ten „nový“ vzhled co nejdéle — bez zbytečného patosu, ale s pečlivostí do posledního detailu.
            </p>
            <p className="text-sm leading-7 text-white/78">
              V URBAN DETAILING se zaměřujeme na čistotu, ochranu a celkový vzhled vozu — citlivě a bez zbytečných zásahů, aby vše působilo přirozeně.
            </p>
            <p className="text-sm leading-7 text-white/78">
              Jsme nově otevřené detailingové studio v Brně s profesionálním týmem. Pracujeme podle jasných postupů, používáme moderní autokosmetiku a dbáme na precizní a bezpečný přístup.
            </p>
            <p className="text-sm leading-7 text-white/78">
              Ceny držíme dostupné a transparentní, řešení přizpůsobíme vašemu rozpočtu i cílům. A ano: pracujeme s jakýmkoliv autem — městským, rodinným, prémiovým, novým i ojetým.
            </p>
            <p className="text-sm leading-7 text-white/78">
              URBAN DETAILING — vaše auto může vypadat jako nové.
            </p>
            <p className="text-sm text-white/88">
              Více o našich službách najdete{" "}
              <a href="#services" className="underline underline-offset-4 transition-colors duration-200 hover:text-accent">
                zde
              </a>
              .
            </p>
          </div>
        </section>

        <section id="services" className="section-wrap border-t border-white/10">
          <h2 className="section-title-underline title-font text-4xl sm:text-6xl">Služby</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((category, categoryIndex) => {
              const isOpen = openServiceCategory === categoryIndex;

              return (
                <article key={category.title} className="card-base">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenServiceCategory(isOpen ? null : categoryIndex)
                    }
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span>
                      <h3 className="title-font text-2xl">{category.title}</h3>
                      <p className="price-text">{category.price}</p>
                      <p className="mt-2 text-sm text-white/75">{category.text}</p>
                    </span>
                    <span
                      className={`text-2xl font-bold text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "mt-5 grid-rows-[1fr]" : "mt-0 grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {category.items.length > 0 ? (
                        <ul className="space-y-3">
                          {category.items.map((item) => (
                            <li
                              key={`${category.title}-${item.name}`}
                              className="rounded-lg border border-white/12 bg-black/25 px-4 py-3"
                            >
                              <p className="title-font text-xl">{item.name}</p>
                              {item.description ? (
                                <p className="mt-2 text-sm text-white/72">
                                  {item.description}
                                </p>
                              ) : null}
                              {item.options.length > 0 ? (
                                <ul className="mt-3 space-y-2">
                                  {item.options.map((opt) => (
                                    <li
                                      key={`${item.name}-${opt.option}`}
                                      className="rounded-md border border-white/10 bg-black/35 px-3 py-2"
                                    >
                                      <div className="flex items-center justify-between gap-3">
                                        <p className="text-sm font-semibold text-white/90">{opt.option}</p>
                                        <p className="text-sm font-bold text-accent">{opt.price}</p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="mt-2 text-xs text-white/55">
                                  Přidejte cenové možnosti (option + price).
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-white/65">
                          Kategorie je připravená. Přidejte sem služby, jejich option a ceny.
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="packages" className="section-wrap border-t border-white/10">
          <h2 className="section-title-underline title-font text-4xl sm:text-6xl">Balíčky</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {packages.map((item, index) => (
              <article
                key={item.name}
                className={`card-base ${index === 1 ? "border-white/20 bg-black/55" : ""}`}
              >
                <h3 className="title-font text-3xl">{item.name}</h3>
                <p className="price-text">{item.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {item.items.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="works" className="section-wrap border-t border-white/10">
          <h2 className="section-title-underline title-font text-4xl sm:text-6xl">Galerie prací</h2>
        </section>

        <section id="reviews" className="section-wrap border-t border-white/10">
          <h2 className="section-title-underline title-font text-4xl sm:text-6xl">Recenze klientů</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article key={`${review.name}-${index}`} className="card-base">
                <p className="text-accent">★★★★★</p>
                <p className="mt-3 text-sm text-white/85">{review.text}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="section-wrap border-t border-white/10 pb-20">
          <h2 className="title-font text-4xl sm:text-6xl">Kontakt</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="card-base">
              <p className="text-sm text-white/70">Adresa</p>
              <p className="mt-2 text-xl">Urban Detailing, Zábrdovická 10a, Brno</p>
              <p className="mt-5 text-sm text-white/70">Otevírací doba</p>
              <p className="mt-2 text-base">Po-Pá: 08:00-19:00</p>
              <p className="text-base">So-Ne: 09:00-15:00</p>
              <div className="mt-6 flex flex-col gap-4">
                <a href="tel:+420777123456" className="rounded-full border border-white/20 px-5 py-3 text-center transition-colors duration-300 hover:border-accent hover:text-accent">
                  +420 602 561 013
                </a>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="social-links">
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Telegram"
                      className="social-logo-link"
                    >
                      <img
                        src="/images/telegram-logo.png"
                        alt="Telegram"
                        className="social-logo social-logo--telegram"
                      />
                    </a>
                    <a
                      href="https://wa.me/420602561013"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="social-logo-link"
                    >
                      <img
                        src="/images/whatsapp-logo.png"
                        alt="WhatsApp"
                        className="social-logo social-logo--whatsapp"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/urban.car_detailing?igsh=MXQ1NDdlcHQxNTlhMQ=="
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="social-logo-link"
                    >
                      <img
                        src="/images/instagram-logo.png"
                        alt="Instagram"
                        className="social-logo social-logo--instagram"
                      />
                    </a>
                  </div>
                  <a
                    href="mailto:urbandetailingbrno@gmail.com"
                    className="rounded-full border border-white/20 px-5 py-3 text-center text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    urbandetailingbrno@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Mapa studia"
                src="https://www.google.com/maps?q=49.2010178,16.6333059&z=17&output=embed"
                className="h-[360px] w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
