const teams = document.querySelectorAll(".team");
teams.forEach((team) => {
  team.addEventListener("click", () => {
    removeActiveClass();
    team.classList.add("active");
  });
});
function removeActiveClass() {
  teams.forEach((team) => {
    team.classList.remove("active");
  });
}
