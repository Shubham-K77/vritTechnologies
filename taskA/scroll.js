// Select All The Classes With Section:
const sections = document.querySelectorAll(".section");
// Add Event Listener To Entire Screen:
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // Get The Dimensions Of The Section
    const dimension = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const center = viewportHeight / 2;

    if (dimension.top < center && dimension.bottom > center) {
      // Section Is In The Center
      section.style.opacity = 1;
      section.style.transform = "scale(1.1)";
    } else {
      // Section Is Not In The Center
      section.style.opacity = 0.3;
      section.style.transform = "scale(1)";
    }
  });
});
