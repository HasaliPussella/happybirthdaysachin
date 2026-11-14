const lightbox = document.querySelector('#photo-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
let previousPhotoButton = null;

document.querySelectorAll('[data-photo-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.polaroid');
    const image = button.querySelector('img');
    previousPhotoButton = button;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = card.querySelector('figcaption strong').textContent;
    lightbox.classList.add('is-visible');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('[data-lightbox-close]').focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-visible');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (previousPhotoButton) previousPhotoButton.focus();
}

lightbox.querySelectorAll('[data-lightbox-close]').forEach((button) => button.addEventListener('click', closeLightbox));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-visible')) closeLightbox();
});
