const $ = (sel, ctx = document) => ctx.querySelector(sel);

const routes = {
  default: {
    h1: `Free SVG Animator - Animate SVG Paths & Properties Online`,
    title: `Free SVG Animator - Animate SVG Paths & Properties Online`,
    desc: `Animate SVG strokes, transforms, and CSS properties with a visual timeline. Preview animations and export optimized CSS or inline animated SVG code.`,
    keywords: 'SVG animator online, animate SVG stroke, CSS SVG animation generator, SVG path animation, export animated SVG free'
  }
};

function applyRoute(route) {
  const r = routes[route];
  if (!r) return;
  document.title = r.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', r.desc);
  const elTitle = $('#page-title');
  if (elTitle) elTitle.textContent = r.h1;
  const elLead = $('#page-lead');
  if (elLead) elLead.textContent = r.desc;
  const canonical = $('#canonical');
  if (canonical) canonical.setAttribute('href', window.location.origin + window.location.pathname);
}

applyRoute('default');
