// ── TERMINAL TYPEWRITER ──
function typeText(el, text, delay, cb) {
  let i = 0;
  const id = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) { clearInterval(id); if (cb) cb(); }
  }, delay);
}

window.addEventListener('load', () => {
  const c1 = document.getElementById('cmd1');
  const o1 = document.getElementById('out1');
  const l2 = document.getElementById('line2');
  const c2 = document.getElementById('cmd2');
  const o2 = document.getElementById('out2');
  const l3 = document.getElementById('line3');
  const c3 = document.getElementById('cmd3');

  typeText(c1, 'whoami', 60, () => {
    setTimeout(() => {
      o1.style.display = 'block';
      setTimeout(() => {
        l2.style.display = 'block';
        typeText(c2, 'have_experience', 60, () => {
          setTimeout(() => {
            o2.style.display = 'block';
            setTimeout(() => {
              l3.style.display = 'block';
              typeText(c3, 'status --looking for opportunities', 60, () => {
                // cursor stays
              });
            }, 400);
          }, 300);
        });
      }, 400);
    }, 300);
  });
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => io.observe(r));
