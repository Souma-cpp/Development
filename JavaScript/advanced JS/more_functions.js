document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 200); // More visible duration
  });
});
