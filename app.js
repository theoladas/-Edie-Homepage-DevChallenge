const navSlide = () => {
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const body = document.body;
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav-active");
    body.classList.toggle("hidden");
  });
};
navSlide();
