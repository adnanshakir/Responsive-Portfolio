let burger = document.querySelector(".mobile"); //  div that will cover the screen
let menu = document.querySelector("#menu"); // menu  is the icon
let index = true;

burger.innerHTML = `
<div class="option">
<a href="/">Resume</a>
<a href="/">Contact</a>
<a href="/">Hire</a>
<a href="/">Projects</a>
</div>`;

// id="wiggle"

menu.addEventListener("click", () => {
  if (index) {
    burger.style.display = "flex";
    index = false;
  } else {
    burger.style.display = "none";
    index = true;
  }
});
