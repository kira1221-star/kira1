/* ===== Content (edit this to change the website text, prices and links) ===== */
const whatsappUrl =
  "https://wa.me/251956948124?text=" +
  encodeURIComponent(
    "Hello STA Digital! I would like to ask about your services (websites, design, documents, promotion, car consultation or IT support)."
  );

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const marqueeItems = [
  "Website Development",
  "Logo & Graphic Design",
  "Business Documentation",
  "Promotion & Advertising",
  "Automotive Consultation",
  "Computer & IT Support",
  "VAT-Inclusive Pricing",
];

const services = [
  { title: "Website Development", icon: "code", cls: "g1c",
    description: "Modern, fast and responsive websites built to turn visitors into customers.",
    points: ["Beautiful Website Design", "Advanced Website Development", "Business and Company Websites", "Custom Web Systems", "Website Maintenance and Updates"] },
  { title: "Logo & Graphic Design", icon: "pen", cls: "g2c",
    description: "Memorable brand visuals that make your business stand out everywhere.",
    points: ["Professional Logo Creation", "Brand Identity Design", "Business Graphics", "Creative Visual Designs"] },
  { title: "Business Documentation", icon: "file", cls: "g3c",
    description: "Clean, professional documents your clients and partners can trust.",
    points: ["Proforma Invoice Creation", "Business Quotations", "Professional Business Documents", "Document Formatting"] },
  { title: "Business Promotion & Advertising", icon: "megaphone", cls: "g4c",
    description: "Words that sell — persuasive content for every marketing channel.",
    points: ["Promotional Text Writing", "Business Promotion", "Advertising Content", "Marketing Content Creation"] },
  { title: "Automotive Consultation", icon: "car", cls: "g5c",
    description: "Honest, detailed guidance to help you choose the right car with confidence.",
    points: ["Detailed Car Explanations", "Car Specifications and Features", "Car Selection and Recommendations", "Automotive Information"] },
  { title: "Computer & IT Support", icon: "cpu", cls: "g6c",
    description: "From fresh installs to troubleshooting — your PC running like new.",
    points: ["Windows Installation", "Software and Application Installation", "Driver Installation", "Microsoft Office Setup", "Computer Troubleshooting", "PC Optimization"] },
];

const pricingTiers = [
  { name: "Beautiful Website", price: 20000, tagline: "Perfect for personal brands and simple company pages.",
    features: ["Beautiful, modern design", "Up to 5 responsive pages", "Mobile & tablet friendly", "Contact form & social links", "Basic SEO setup", "Free basic maintenance"] },
  { name: "Advanced Website", price: 38000, featured: true, tagline: "For growing businesses that need more power and control.",
    features: ["Everything in Beautiful Website", "Up to 10 pages + blog", "CMS — edit content yourself", "Advanced animations & SEO", "Domain & hosting setup", "3 revision rounds + 30-day support"] },
  { name: "Moderate System", price: 80000, tagline: "A custom web application tailored to your workflow.",
    features: ["Custom web application", "User accounts & role access", "Database & dashboard design", "Reports & analytics", "Payment / third-party integrations", "Training & documentation"] },
  { name: "Advanced ERP", price: 400000, flagship: true, tagline: "A complete enterprise resource planning solution.",
    features: ["Complete ERP solution", "Sales, inventory, finance & HR", "Multi-branch & multi-user", "Custom workflows & automation", "API integrations", "Deployment, training & 1-year support"] },
];

const contactChannels = [
  { name: "Instagram", handle: "@sta_boy12", note: "Follow us for our latest work and updates.", href: "https://instagram.com/sta_boy12", icon: "instagram", cls: "ig", button: "Open Instagram" },
  { name: "WhatsApp", handle: "0956948124", note: "Chat with us directly — usually a fast reply.", href: whatsappUrl, icon: "phone", cls: "wa", button: "Chat on WhatsApp" },
  { name: "Telegram", handle: "@madmax126", note: "Message us on Telegram any time.", href: "https://t.me/madmax126", icon: "send", cls: "tg", button: "Open Telegram" },
];

/* ===== Helpers ===== */
const $ = (id) => document.getElementById(id);
const icon = (name, style = "") => `<svg class="ico"${style ? ` style="${style}"` : ""}><use href="#${name}"/></svg>`;
const reveal = (html, delay = 0, extra = "") =>
  `<div class="reveal ${extra}" ${delay ? `data-delay="${delay}"` : ""}>${html}</div>`;

/* ===== Render sections ===== */
const links = (cls) => navLinks.map((l) => `<a href="${l.href}">${l.label}</a>`).join("");
$("nav-links").innerHTML = links();
$("mobile-links").innerHTML = links();

$("marquee").innerHTML = [...marqueeItems, ...marqueeItems]
  .map((t) => `<span>${t.replace("&", "&amp;")}<i>✦</i></span>`)
  .join("");

$("services-grid").innerHTML = services
  .map((s, i) =>
    reveal(
      `<div class="card">
        <div class="card-top">
          <div class="ic ${s.cls}">${icon(s.icon)}</div>
          <span class="num">0${i + 1}</span>
        </div>
        <h3>${s.title.replace("&", "&amp;")}</h3>
        <p>${s.description}</p>
        <ul>${s.points.map((p) => `<li>${icon("check")}${p}</li>`).join("")}</ul>
      </div>`,
      (i % 3) * 100
    )
  )
  .join("");

$("pricing-grid").innerHTML = pricingTiers
  .map((t, i) => {
    const badge = t.featured ? `<span class="tbadge pop">Most Popular</span>` : t.flagship ? `<span class="tbadge ent">Enterprise</span>` : "";
    const inner = `<div class="tier-in">
        ${badge}
        <h3>${t.name}</h3>
        <p class="tag">${t.tagline}</p>
        <div class="price"><small>ETB</small><b>${t.price.toLocaleString("en-US")}</b></div>
        <span class="vat">${icon("check")}VAT included</span>
        <ul>${t.features.map((f) => `<li>${icon("check")}${f.replace("&", "&amp;")}</li>`).join("")}</ul>
        <a class="btn ${t.featured ? "btn-em" : "btn-ghost"}" href="${whatsappUrl}" target="_blank" rel="noreferrer">Order Now${icon("arrowRight", "width:1rem;height:1rem")}</a>
      </div>`;
    return reveal(`<div class="tier ${t.featured ? "feat" : ""}">${inner}</div>`, i * 90, t.featured ? "tier-wrap-feat" : "");
  })
  .join("");

$("contact-grid").innerHTML = contactChannels
  .map((c, i) =>
    reveal(
      `<div class="ccard">
        <div class="cic ${c.cls}">${icon(c.icon)}</div>
        <h3>${c.name}</h3>
        <p class="handle">${c.handle}</p>
        <p class="note">${c.note}</p>
        <a class="btn btn-ghost" href="${c.href}" target="_blank" rel="noreferrer">${c.button}${icon("arrowRight", "width:1rem;height:1rem")}</a>
      </div>`,
      i * 100
    )
  )
  .join("");

$("footer-services").innerHTML = services
  .map((s) => `<li><a href="#services">${s.title.replace("&", "&amp;")}</a></li>`)
  .join("");
$("footer-links").innerHTML =
  navLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("") +
  `<li><a href="#pricing">Pricing (VAT included)</a></li>`;

$("year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = whatsappUrl));

/* ===== Navbar: solid background on scroll + mobile menu ===== */
const header = $("header");
const burger = $("burger");
const updateHeader = () =>
  header.classList.toggle("solid", window.scrollY > 12 || header.classList.contains("open"));
window.addEventListener("scroll", updateHeader, { passive: true });
burger.addEventListener("click", () => {
  header.classList.toggle("open");
  updateHeader();
});
$("mobile-links").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    header.classList.remove("open");
    updateHeader();
  }
});
updateHeader();

/* ===== Reveal on scroll ===== */
document.querySelectorAll(".reveal").forEach((el) => {
  const d = el.dataset.delay;
  if (d) el.style.transitionDelay = d + "ms";
});
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ===== Count-up numbers in the hero ===== */
const countObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = Number(el.dataset.count);
      const duration = 1500;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    }),
  { threshold: 0.4 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));