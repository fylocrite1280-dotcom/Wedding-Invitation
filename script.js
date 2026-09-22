const opening = document.getElementById("opening"), card = document.getElementById("card"), open = document.getElementById("open"), site = document.getElementById("site");
let done = false;
function start() { if (done) return; done = true; opening.classList.add("opened", "fade"); setTimeout(() => { site.classList.add("ready"); window.scrollTo(0, 0) }, 650); setTimeout(() => opening.remove(), 1500) }
card.onclick = start; open.onclick = start; card.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start() } };
const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target) } }), { threshold: .12, rootMargin: "0px 0px -7% 0px" });
document.querySelectorAll(".reveal").forEach(x => obs.observe(x));

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    document.querySelectorAll(".floral-float").forEach((el, i) => el.style.transform = `${i ? "scaleX(-1)" : ""} translateY(${y * .025}px)`);
    ticking = false;
  });
}, { passive: true });
const target = new Date("October 16, 2026 19:00:00").getTime();
function tick() { let d = Math.max(0, target - Date.now()), days = Math.floor(d / 86400000); d %= 86400000; let h = Math.floor(d / 3600000); d %= 3600000; let m = Math.floor(d / 60000); d %= 60000; let s = Math.floor(d / 1000); for (const [id, v] of [["days", days], ["hours", h], ["minutes", m], ["seconds", s]]) document.getElementById(id).textContent = String(v).padStart(2, "0") } tick(); setInterval(tick, 1000);