# A Birthday Surprise for Sachin ♥

A mobile-friendly, red scrapbook-inspired birthday website built with HTML, CSS and vanilla JavaScript.

## Included chapters

1. **Secret entrance** — four-digit passcode screen.
2. **Birthday room** — welcome message and three interactive gifts.
3. **Birthday cake** — animated cake and candle, tap-to-blow interaction, smoke, confetti and a birthday wish.
4. **Memory gallery** — six scrapbook/Polaroid photo spaces that you can replace with your own pictures.
5. **Heartfelt letter** — a personal birthday letter for Sachin.

## Run the website

1. Extract the ZIP file.
2. Open the `sachin-birthday` folder in Visual Studio Code.
3. Install the **Live Server** extension if you do not already have it.
4. Right-click `index.html` and select **Open with Live Server**.
5. Enter the passcode. The starter passcode is `1234`.

## Personalize the passcode

Open `js/config.js` and replace `passcode: "1234"` with your own four-digit code. This is a fun surprise gate, not secure authentication: a passcode stored in frontend JavaScript can be viewed in the website files.

## Add your photos

The gallery already has six large photo spaces and matching placeholder artwork.

1. Put your photos in `assets/images/photos/`.
2. Name them `photo-01.jpg` through `photo-06.jpg` (PNG is also fine).
3. Open `pages/gallery.html`.
4. Replace each `photo-0X-placeholder.svg` image path with your actual image filename.
5. Edit the captions below each photo to match your memories.

There are more detailed instructions in `assets/images/photos/README.txt`.

## Background music

Every chapter has a **♫ Play music** button. To use your own song, place an MP3 in `assets/music/` and name it exactly `background-music.mp3`. The button will play/pause that file, and the song will repeat automatically. See `assets/music/README.txt` for the short setup steps.

## Edit the letter

Open `pages/letter.html` to change any part of the letter or add your own sign-off.

## Project structure

- `index.html` — passcode entrance
- `pages/birthday.html` — welcome and gifts
- `pages/cake.html` — interactive birthday cake
- `pages/gallery.html` — six photo placeholders and lightbox preview
- `pages/letter.html` — heartfelt letter
- `css/` — shared and page-specific styling
- `js/` — passcode, gifts, cake, gallery and music interactions
- `assets/images/photos/` — replaceable photo placeholders
- `assets/music/` — music notes and usage information

Everything runs locally in the browser; no database, backend, paid service or build step is needed.
