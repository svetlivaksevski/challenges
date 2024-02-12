console.clear();
const bodyElement = document.querySelector('[data-js="body"]');
const switchToDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const switchToLightMode = document.querySelector('[data-js="light-mode-button"]');
const switchToToggleMode = document.querySelector('[data-js="toggle-button"]');

switchToDarkMode.addEventListener("click", () => {
	bodyElement.classList.add("dark");
});

switchToLightMode.addEventListener("click", () => {
	bodyElement.classList.remove("dark");
});

switchToToggleMode.addEventListener("click", () => {
	bodyElement.classList.toggle("dark");
});