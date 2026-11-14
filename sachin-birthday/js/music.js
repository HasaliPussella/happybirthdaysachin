/* Custom MP3 background music.
   Add your own MP3 file to assets/music/ and name it:
   background-music.mp3
   The same Play/Pause button is used on every page. */

const musicButton = document.querySelector('[data-music-toggle]');

if (musicButton) {
  const backgroundMusic = new Audio('../assets/music/background-music.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.preload = 'none';
  backgroundMusic.volume = 0.65;

  function updateButton(isPlaying) {
    musicButton.textContent = isPlaying ? '♫ Pause music' : '♫ Play music';
    musicButton.setAttribute('aria-pressed', String(isPlaying));
  }

  async function toggleMusic() {
    if (!backgroundMusic.paused) {
      backgroundMusic.pause();
      updateButton(false);
      return;
    }

    try {
      await backgroundMusic.play();
      updateButton(true);
    } catch (error) {
      updateButton(false);
      musicButton.textContent = '♫ Add your MP3 first';
      window.setTimeout(() => {
        if (backgroundMusic.paused) musicButton.textContent = '♫ Play music';
      }, 2500);
    }
  }

  backgroundMusic.addEventListener('ended', () => updateButton(false));
  musicButton.addEventListener('click', toggleMusic);
}
