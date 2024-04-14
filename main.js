const incrementButtons = document.querySelectorAll(".increment");
const zeroButtons = document.querySelectorAll(".zero");
const endButton = document.querySelector(".end");

incrementButtons.forEach((button) => {
  button.onclick = function () {
    let countDisplay = button.previousElementSibling;
    let currentCount = parseInt(countDisplay.textContent, 10);
    countDisplay.textContent = currentCount + 1;
  };
});

zeroButtons.forEach((button) => {
  button.onclick = function () {
    let countDisplay = button.parentElement.querySelector(".count");
    countDisplay.textContent = 0;
  };
});

endButton.onclick = function () {
  const allCountDisplays = document.querySelectorAll(".count");
  allCountDisplays.forEach((countDisplay) => {
    countDisplay.textContent = 0;
  });
};
