// Mobile-Navigation (Burger-Menü)
const burger = document.getElementById('burger');
const nav = document.getElementById('mainnav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ticker: Duplikat der Meldungen für nahtlose Endlosschleife
const track = document.querySelector('.ticker-track');
if (track) {
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
}

// Logo-Glitch: seltener, kurzer Impuls statt Dauerbewegung.
// Reagiert auf prefers-reduced-motion und stoppt den Intervall-Timer dann ganz.
const glitchTarget = document.querySelector('.glitch');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function triggerGlitch() {
  if (!glitchTarget || reduceMotion.matches) return;
  glitchTarget.classList.add('is-glitching');
  window.setTimeout(() => glitchTarget.classList.remove('is-glitching'), 340);
}

let glitchTimer = null;
function scheduleGlitch() {
  const delay = 5000 + Math.random() * 4000; // alle 5–9s ein kurzer Impuls
  glitchTimer = window.setTimeout(() => {
    triggerGlitch();
    scheduleGlitch();
  }, delay);
}

if (glitchTarget && !reduceMotion.matches) {
  scheduleGlitch();
}
reduceMotion.addEventListener('change', (event) => {
  if (event.matches && glitchTimer) {
    window.clearTimeout(glitchTimer);
    glitchTimer = null;
  } else if (!event.matches && !glitchTimer) {
    scheduleGlitch();
  }
});
