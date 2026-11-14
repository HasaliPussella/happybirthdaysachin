const giftContent = {
  message: {
    eyebrow: "GIFT 01 · A LITTLE NOTE",
    title: "A little message",
    sticker: "♥",
    copy: "Happy Birthday, Sachin!\n\nI am genuinely so glad I got to meet you this year. You have become one of the best people in my life, and I hope this new chapter brings you the happiness, adventures and little everyday joys you deserve. Keep being your wonderful self!",
    signoff: "Have the best day! ♥"
  },
  memories: {
    eyebrow: "GIFT 02 · THE MEMORY BOX",
    title: "Little moments matter",
    sticker: "✿",
    copy: "Some of the best memories are made from the simplest moments — random laughs, silly conversations and all those unforgettable little things.\n\nThis box is a tiny reminder that the moments we share are worth keeping. More memories to come!",
    signoff: "To many more memories ♥"
  },
  surprise: {
    eyebrow: "GIFT 03 · ONE MORE THING",
    title: "The surprises continue...",
    sticker: "✦",
    copy: "You didn't think this was the whole surprise, did you?\n\nThere's still a birthday cake to make a wish on, photos to look through and a special letter waiting for you. Keep exploring!",
    signoff: "Your next chapter awaits ♥"
  }
};

const giftButtons = document.querySelectorAll("[data-gift]");
const modal = document.querySelector("#gift-modal");
const modalTitle = document.querySelector("#modal-title");
const modalEyebrow = document.querySelector("#modal-eyebrow");
const modalCopy = document.querySelector("#modal-copy");
const modalHand = document.querySelector("#modal-hand");
const modalSticker = document.querySelector("#modal-sticker");
const progress = document.querySelector("#gift-progress");
const openedGifts = new Set();
let lastFocusedElement = null;

document.querySelector("#friend-name").textContent = SITE_CONFIG.friendName;

giftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const gift = giftContent[button.dataset.gift];
    if (!gift) return;

    lastFocusedElement = button;
    openedGifts.add(button.dataset.gift);
    button.classList.add("is-opened");
    button.setAttribute("aria-label", `${gift.title}, opened`);

    modalEyebrow.textContent = gift.eyebrow;
    modalTitle.textContent = gift.title;
    modalCopy.textContent = gift.copy;
    modalHand.textContent = gift.signoff;
    modalSticker.textContent = gift.sticker;

    progress.textContent = `You've opened ${openedGifts.size} of 3 gifts ♥`;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  });
});

function closeGiftModal() {
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

modal.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeGiftModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-visible")) {
    closeGiftModal();
  }
});
