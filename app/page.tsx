import type { ReactNode } from "react";

// ===== ข้อมูลร้าน (แก้ตรงนี้ได้เลย) =====
const shop = {
  name: "บ้านกาแฟอุ่นใจ",
  tagline: "กาแฟหอม ๆ ขนมอบใหม่ ในมุมเล็ก ๆ ที่อบอุ่นเหมือนบ้าน",
  intro:
    "เราคั่วเมล็ดกาแฟจากดอยไทยเองทุกสัปดาห์ และอบขนมใหม่ทุกเช้า แวะมานั่งพัก ทำงาน หรือสั่งกลับบ้านก็ได้",
  lineId: "@baankafaeunjai",
  phone: "081-234-5678",
  facebook: "https://www.facebook.com/baankafaeunjai",
  instagram: "https://www.instagram.com/baankafaeunjai",
  address: "123/4 ถนนนิมมานเหมินท์ ซอย 9 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200",
  hours: "เปิดทุกวัน 07:30 – 18:00 น. (ปิดทุกวันพุธ)",
  mainButton: "ทักไลน์เลย",
};

const lineUrl = `https://line.me/R/ti/p/${encodeURIComponent(shop.lineId)}`;
const telUrl = `tel:${shop.phone.replace(/[^0-9+]/g, "")}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`;

const highlights = [
  {
    icon: <BeanIcon />,
    title: "คั่วสดเองทุกสัปดาห์",
    text: "เมล็ดกาแฟอาราบิก้าจากดอยไทย คั่วเองในร้าน หอมสดทุกแก้ว",
  },
  {
    icon: <CroissantIcon />,
    title: "ขนมอบใหม่ทุกเช้า",
    text: "ครัวซองต์ บราวนี่ และขนมโฮมเมด อบใหม่ทุกวัน ไม่ค้างคืน",
  },
  {
    icon: <HomeIcon />,
    title: "นั่งสบายเหมือนอยู่บ้าน",
    text: "มี Wi-Fi ปลั๊กไฟทุกโต๊ะ มุมโซฟาอุ่น ๆ นั่งทำงานได้ทั้งวัน",
  },
];

const menu = [
  { group: "กาแฟ", items: [
    { name: "อเมริกาโน่ (ร้อน / เย็น)", price: "55 / 65" },
    { name: "ลาเต้ (ร้อน / เย็น)", price: "65 / 75" },
    { name: "คาปูชิโน่", price: "65" },
    { name: "ดริปกาแฟดอยไทย", price: "90" },
  ] },
  { group: "ไม่ใช่กาแฟ", items: [
    { name: "ชาไทยนมสด", price: "60" },
    { name: "โกโก้เข้มข้น", price: "65" },
    { name: "มัทฉะลาเต้", price: "75" },
  ] },
  { group: "ขนมอบ", items: [
    { name: "ครัวซองต์เนยสด", price: "55" },
    { name: "บราวนี่ช็อกโกแลต", price: "60" },
    { name: "บานานาเค้กโฮมเมด", price: "50" },
  ] },
];

const faqs = [
  {
    q: "สั่งล่วงหน้าหรือสั่งกลับบ้านได้ไหม?",
    a: "ได้เลยครับ ทักไลน์บอกเมนูและเวลาที่จะมารับ เราเตรียมไว้ให้พร้อม ไม่ต้องรอคิว",
  },
  {
    q: "มีที่จอดรถไหม?",
    a: "มีที่จอดรถหน้าร้าน 4 คัน และจอดมอเตอร์ไซค์ได้ข้างร้าน",
  },
  {
    q: "รับจัดกาแฟสำหรับประชุมหรืองานเลี้ยงไหม?",
    a: "รับครับ สั่งตั้งแต่ 20 แก้วขึ้นไป แจ้งล่วงหน้าอย่างน้อย 2 วัน ทักไลน์มาคุยรายละเอียดได้เลย",
  },
  {
    q: "ชำระเงินแบบไหนได้บ้าง?",
    a: "รับเงินสด โอนผ่านพร้อมเพย์ และสแกน QR ได้ทุกธนาคาร",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== ส่วนหัว ===== */}
      <header className="relative overflow-hidden bg-espresso text-cream">
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-caramel/30 blur-2xl" />
        <div aria-hidden className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-mocha/50 blur-2xl" />

        <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-2 font-display text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-caramel text-cream">
              <CupIcon className="h-5 w-5" />
            </span>
            {shop.name}
          </a>
          <a href="#contact" className="text-sm text-cream/80 underline-offset-4 hover:underline">
            ติดต่อเรา
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.2fr_1fr] md:pb-24 md:pt-12">
          <div>
            <p className="mb-3 inline-block rounded-full bg-cream/10 px-4 py-1 text-sm text-latte">
              ร้านกาแฟเล็ก ๆ ใจกลางนิมมาน
            </p>
            <h1 className="font-display text-hero font-medium">{shop.tagline}</h1>
            <p className="mt-5 max-w-xl text-lead text-latte">{shop.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LineButton />
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 font-medium text-cream transition hover:bg-cream/10"
              >
                ดูเมนูและราคา
              </a>
            </div>
          </div>

          {/* ภาพประกอบแก้วกาแฟ (ใช้รูปทรงแทนรูปถ่าย) */}
          <div aria-hidden className="mx-auto w-56 sm:w-64 md:w-full md:max-w-xs">
            <div className="relative aspect-square rounded-full bg-latte/95 p-8 shadow-2xl">
              <div className="grid h-full w-full place-items-center rounded-full bg-caramel">
                <CupIcon className="h-1/2 w-1/2 text-cream" />
              </div>
              <span className="absolute -left-2 top-6 rounded-full bg-leaf px-4 py-1.5 text-sm text-cream shadow-lg">
                คั่วสด
              </span>
              <span className="absolute -right-2 bottom-8 rounded-full bg-cream px-4 py-1.5 text-sm text-espresso shadow-lg">
                อบใหม่ทุกเช้า
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ===== จุดเด่น ===== */}
        <Section id="highlights" eyebrow="ทำไมต้องบ้านกาแฟอุ่นใจ" title="3 เหตุผลที่ลูกค้ากลับมาซ้ำ">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-3xl bg-latte p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-caramel text-cream">
                  {h.icon}
                </div>
                <h3 className="font-display text-xl font-medium">{h.title}</h3>
                <p className="mt-2 text-mocha">{h.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== เมนูและราคา ===== */}
        <div className="bg-latte/60">
          <Section id="menu" eyebrow="เมนูและราคา" title="เมนูแนะนำของร้าน">
            <div className="grid gap-5 md:grid-cols-3">
              {menu.map((m) => (
                <div key={m.group} className="rounded-3xl bg-cream p-6 shadow-sm">
                  <h3 className="mb-3 font-display text-xl font-medium text-caramel-dark">{m.group}</h3>
                  <ul className="divide-y divide-latte">
                    {m.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-4 py-2.5">
                        <span>{item.name}</span>
                        <span className="shrink-0 font-medium">{item.price} ฿</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-mocha">
              เพิ่มช็อตกาแฟ +15 ฿ · เปลี่ยนเป็นนมโอ๊ต +20 ฿
            </p>
          </Section>
        </div>

        {/* ===== คำถามที่พบบ่อย ===== */}
        <Section id="faq" eyebrow="คำถามที่พบบ่อย" title="สงสัยอะไร ถามได้เลย">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-latte px-5 py-4 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream text-caramel-dark transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-mocha">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* ===== ติดต่อเรา ===== */}
        <div id="contact" className="bg-espresso text-cream">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <p className="text-sm font-medium text-caramel">ติดต่อเรา</p>
            <h2 className="mt-1 font-display text-section font-medium">แวะมาหา หรือทักมาคุยกันได้เลย</h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-latte">
                <InfoRow icon={<PinIcon />}>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                    {shop.address}
                  </a>
                </InfoRow>
                <InfoRow icon={<ClockIcon />}>{shop.hours}</InfoRow>
                <InfoRow icon={<PhoneIcon />}>
                  <a href={telUrl} className="underline-offset-4 hover:underline">{shop.phone}</a>
                </InfoRow>
                <InfoRow icon={<ChatIcon />}>LINE: {shop.lineId}</InfoRow>
              </div>

              <div className="flex flex-col gap-3">
                <LineButton />
                <a
                  href={telUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-7 py-3.5 font-medium text-cream transition hover:bg-caramel-dark"
                >
                  <PhoneIcon /> โทรหาร้าน
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={shop.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cream/30 px-5 py-3 transition hover:bg-cream/10"
                  >
                    Facebook
                  </a>
                  <a
                    href={shop.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cream/30 px-5 py-3 transition hover:bg-cream/10"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== ส่วนท้าย ===== */}
      <footer className="bg-espresso text-sm text-latte/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-cream/10 px-5 py-6 text-center sm:flex-row sm:text-left">
          <p>© 2026 {shop.name}</p>
          <p>กาแฟดี ๆ ใกล้บ้านคุณ</p>
        </div>
      </footer>
    </>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <div className="mb-8 text-center md:mb-10">
        <p className="text-sm font-medium text-caramel-dark">{eyebrow}</p>
        <h2 className="mt-1 font-display text-section font-medium">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function LineButton() {
  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-line px-7 py-3.5 font-medium text-white shadow-lg transition hover:brightness-95"
    >
      <ChatIcon /> {shop.mainButton}
    </a>
  );
}

function InfoRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <p className="flex items-start gap-3">
      <span className="mt-1 shrink-0 text-caramel">{icon}</span>
      <span>{children}</span>
    </p>
  );
}

// ===== ไอคอน =====
function Svg({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {children}
    </svg>
  );
}

function CupIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" />
    </Svg>
  );
}

function BeanIcon() {
  return (
    <Svg className="h-6 w-6">
      <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
      <path d="M8 18c2-3 2-6 0-9M16 6c-2 3-2 6 0 9" />
    </Svg>
  );
}

function CroissantIcon() {
  return (
    <Svg className="h-6 w-6">
      <path d="M4 15c0-5 3.5-9 8-9s8 4 8 9" />
      <path d="M4 15c1.5 2 4 3 8 3s6.5-1 8-3" />
      <path d="M9 7.5 10 17M15 7.5 14 17" />
    </Svg>
  );
}

function HomeIcon() {
  return (
    <Svg className="h-6 w-6">
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M12 17s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.8-3 3.8Z" />
    </Svg>
  );
}

function ChatIcon() {
  return (
    <Svg>
      <path d="M12 4c4.8 0 8.5 3 8.5 6.8S16.8 17.5 12 17.5c-.7 0-1.3 0-2-.2L6 20v-3.6c-1.6-1.2-2.5-3-2.5-4.9C3.5 7 7.2 4 12 4Z" />
    </Svg>
  );
}

function PhoneIcon() {
  return (
    <Svg>
      <path d="M5 4h3.5l1.5 4-2 1.3a10 10 0 0 0 6.7 6.7l1.3-2 4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4Z" />
    </Svg>
  );
}

function PinIcon() {
  return (
    <Svg>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </Svg>
  );
}

function ClockIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  );
}
