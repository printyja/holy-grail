function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector(".nav");
  outerGrid.classList.toggle("hide-nav");
}
