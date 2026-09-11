const filters = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const category = btn.dataset.filter;
  dishes.forEach(dish => {
    dish.style.display = category === "all" || dish.dataset.category === category ? "" : "none";
  });
}));
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
