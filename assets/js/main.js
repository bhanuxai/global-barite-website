const steps = document.querySelectorAll(".rail-step");
const visuals = document.querySelectorAll(".visual-card");
const menuItems = document.querySelectorAll(".rail-menu span");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const index = [...steps].indexOf(entry.target);

        steps.forEach(s => s.classList.remove("active"));
        visuals.forEach(v => v.classList.remove("active"));
        menuItems.forEach(m => m.classList.remove("active"));

        steps[index].classList.add("active");
        visuals[index].classList.add("active");
        menuItems[index].classList.add("active");
      }
    });
  },
  {
    threshold:0.6
  }
);

steps.forEach(step => observer.observe(step));
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
