const btn = document.querySelector(".r");
isPurple = false;
btn.addEventListener("click", () => {
  if (isPurple) {
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Red";
  } else {
    btn.style.backgroundColor = "purple";
    btn.innerHTML = "Purple";
  }
  isPurple = !isPurple;
});

const blue_button = document.querySelector(".b");
isPink = false;
blue_button.addEventListener("click", () => {
  if (isPink) {
    blue_button.style.backgroundColor = "Pink";
    blue_button.innerHTML = "Pink";
  } else {
    blue_button.style.backgroundColor = "Blue";
    blue_button.innerHTML = "Blue";
  }
  isPink = !isPink;
});
