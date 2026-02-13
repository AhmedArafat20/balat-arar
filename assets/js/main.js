// إعدادات عامة
const PHONE = "0563170660";
const WA_NUM = "966563170660"; // واتساب بصيغة دولية (السعودية 966) بدون +

function setActiveNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href").toLowerCase() === path);
  });
}

function setupNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => nav.classList.toggle("open"));
  // اقفل المينيو بعد اختيار لينك
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function setupFloating() {
  document.querySelectorAll("[data-phone]").forEach(el => el.setAttribute("href", `tel:${PHONE}`));
  document.querySelectorAll("[data-wa]").forEach(el => el.setAttribute("href", `https://wa.me/${WA_NUM}`));
}

function setupWhatsAppForm() {
  const form = document.querySelector("[data-wa-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='name']")?.value?.trim() || "";
    const area = form.querySelector("[name='area']")?.value?.trim() || "";
    const service = form.querySelector("[name='service']")?.value?.trim() || "";
    const msg = form.querySelector("[name='message']")?.value?.trim() || "";

    const text =
      `مرحباً، أنا ${name || "عميل"}.%0A` +
      `المدينة/الحي: ${area || "غير محدد"}%0A` +
      `الخدمة المطلوبة: ${service || "غير محدد"}%0A` +
      `التفاصيل: ${msg || "بدون تفاصيل"}%0A%0A` +
      `أرغب في عرض سعر ومواعيد متاحة.`;

    window.open(`https://wa.me/${WA_NUM}?text=${text}`, "_blank", "noopener,noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  setupNavToggle();
  setupFloating();
  setupWhatsAppForm();
});
