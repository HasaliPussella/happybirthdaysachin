const letterName = document.querySelector("#letter-friend-name");
if (letterName && window.SITE_CONFIG) letterName.textContent = SITE_CONFIG.friendName;
