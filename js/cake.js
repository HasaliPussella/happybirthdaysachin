const friendName = document.querySelector('#cake-friend-name');
if (friendName && window.SITE_CONFIG) friendName.textContent = SITE_CONFIG.friendName;

const blowButtons = document.querySelectorAll('[data-blow]');
const instruction = document.querySelector('#cake-instruction');
const wishReveal = document.querySelector('#wish-reveal');
let candleBlown = false;

function celebrate() {
  if (candleBlown) return;
  candleBlown = true;
  document.body.classList.add('is-blown');
  instruction.textContent = 'You did it! Keep that beautiful wish close to your heart. ♥';
  blowButtons.forEach((button) => {
    button.disabled = true;
    if (button.classList.contains('blow-button')) button.innerHTML = 'Wish sent with love <span>♥</span>';
  });
  wishReveal.classList.add('is-visible');
  wishReveal.setAttribute('aria-hidden', 'false');
  createConfetti();
}

function createConfetti() {
  const colors = ['#f4c6a9', '#f8e6d5', '#d87872', '#bd4e55', '#f0b6aa', '#e6a86f'];
  const symbols = ['♥', '✦', '•'];
  for (let i = 0; i < 58; i += 1) {
    const piece = document.createElement('span');
    const heart = i % 7 === 0;
    piece.className = `confetti-piece${heart ? ' heart' : ''}`;
    piece.textContent = heart ? symbols[0] : (i % 4 === 0 ? symbols[1] : '');
    piece.style.setProperty('--x', `${Math.random() * 100}vw`);
    piece.style.setProperty('--size', `${heart ? 13 + Math.random() * 9 : 5 + Math.random() * 7}px`);
    piece.style.setProperty('--confetti', colors[i % colors.length]);
    piece.style.setProperty('--duration', `${2.7 + Math.random() * 2.4}s`);
    piece.style.setProperty('--delay', `${Math.random() * .75}s`);
    piece.style.setProperty('--drift', `${-90 + Math.random() * 180}px`);
    piece.style.setProperty('--spin', `${180 + Math.random() * 900}deg`);
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6500);
  }
}

blowButtons.forEach((button) => button.addEventListener('click', celebrate));
