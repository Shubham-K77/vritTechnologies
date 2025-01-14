# Task - A

## Concept

The idea is to enhance the user experience by visually emphasizing the section currently in focus (centered on the screen). The other sections are faded and scaled down to indicate they are not the main focus.

## File Structure

- **HTML**: Defines three sections in a vertically scrolling layout.
- **CSS**: Uses TailwindCSS for styling and animations.
- **JavaScript**: Adds interactivity by detecting the scroll position and applying styles dynamically.

## How It Works

**JavaScript Logic**:

- **Selecting Sections**:

  ```javascript
  const sections = document.querySelectorAll(".section");
  ```

  This selects all `div` elements with the `section` class.

- **Scroll Event Listener**:

  ```javascript
  window.addEventListener("scroll", () => {
  ```

  Listens for the scroll event to track user interaction.

- **Get Dimensions**:

  ```javascript
  const dimension = section.getBoundingClientRect();
  ```

  Retrieves the visible area of each section relative to the viewport.

- **Viewport Center Calculation**:

  ```javascript
  const viewportHeight = window.innerHeight;
  const center = viewportHeight / 2;
  ```

  Determines the vertical center of the viewport.

- **Condition for Centered Section**:
  ```javascript
  if (dimension.top < center && dimension.bottom > center) {
    section.style.opacity = 1;
    section.style.transform = "scale(1.1)";
  } else {
    section.style.opacity = 0.3;
    section.style.transform = "scale(1)";
  }
  ```
  Checks whether the section’s edges surround the center of the screen. If true, the section is zoomed in and fully visible; otherwise, it is faded and scaled down.

## Key Points

- **getBoundingClientRect()**: Provides the position and size of an element relative to the viewport.
- **Opacity and Transform**: Used for the fade and zoom effect.
- **Event Listener**: Tracks scrolling in real-time.

## Imperfections

This implementation is simple and doesn't handle edge cases like:

- Sections that are partially visible but not centered.
- Mobile screen differences for smaller viewports.

## How to Run

1. Open the `index.html` file in any modern web browser.
2. Scroll down the page to see the sections zoom and fade as they move into the center of the screen.

## Video Demo

[Click here to watch the demo video] (./taskADemo.mp4)

This README is a simple summary to make it beginner-friendly while explaining the logic clearly. Let me know if you need further refinements!
