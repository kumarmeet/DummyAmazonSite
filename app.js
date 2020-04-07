const toggleButton = document.querySelector(".toggle-button");
const dropDown = document.querySelector(".drop-down");

const toggleHandler = () => {
  dropDown.classList.toggle("hide");
  dropDown.classList.add("effect");
};

toggleButton.addEventListener("click", toggleHandler);
