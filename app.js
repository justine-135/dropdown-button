const profileBtn = document.querySelector(".my-profile");
const settingsBtn = document.querySelector(".my-settings");
const iconsBtn = document.querySelector(".my-icons");
const nav = document.querySelector(".navigation");
const firstPage = document.querySelector(".first-page");
const profilePage = document.querySelector(".profile-page");
const settingsPage = document.querySelector(".settings-page");
const iconsPage = document.querySelector(".icons-page");
const settingsBack = document.querySelector(".my-profile-settings");
const profileBack = document.querySelector(".my-profile-profile");
const iconsBack = document.querySelector(".my-profile-icons");
const arrowBtn = document.querySelector(".arrow");

// profileBtn.addEventListener("click", () => {
// 	firstPage.style.transform = "translateX(-350px)";
// 	profilePage.style.transform = "translateX(-340px)";
// 	nav.style.height = "340px";
// });

// profileBack.addEventListener("click", () => {
// 	firstPage.style.transform = "translateX(0px)";
// 	profilePage.style.transform = "translateX(0px)";
// 	nav.style.height = "270px";
// });

arrowBtn.addEventListener("click", () => {
	nav.classList.toggle("toggle");
});

settingsBtn.addEventListener("click", () => {
	firstPage.style.transform = "translateX(-350px)";
	settingsPage.style.transform = "translateX(-640px)";
	nav.style.height = "340px";
});

settingsBack.addEventListener("click", () => {
	firstPage.style.transform = "translateX(0px)";
	settingsPage.style.transform = "translateX(0px)";
	nav.style.height = "340px";
});
iconsBtn.addEventListener("click", () => {
	firstPage.style.transform = "translateX(-350px)";
	iconsPage.style.transform = "translateX(-940px)";
	nav.style.height = "410px";
});

iconsBack.addEventListener("click", () => {
	firstPage.style.transform = "translateX(0px)";
	iconsPage.style.transform = "translateX(0px)";
	nav.style.height = "340px";
});
// secondPage.style.right = "-110%";
