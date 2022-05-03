import { getElement } from './utils.js';

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");

  console.log(getElement);
})

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
})


