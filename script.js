// FORM SUBMISSION
function submitForm(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
  console.log("Form Submitted");
}

// SUBSCRIBE BUTTON
function subscribe() {
  alert("Subscribed Successfully!");
  console.log("User subscribed");
}

// READ MORE TRACKING
function trackReadMore(postName) {
  console.log("User clicked on:", postName);
}

// SCROLL TRACKING
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  console.log("Scroll Position:", scrollPosition);
});

// PAGE LOAD TRACKING
window.onload = () => {
  console.log("Page loaded:", document.title);
};

// BUTTON CLICK TRACKING (GLOBAL)
document.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.innerText);
  }
});