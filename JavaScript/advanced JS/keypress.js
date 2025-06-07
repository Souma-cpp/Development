var heading = document.querySelector("h3");

document.addEventListener("keypress", (event) => {
  console.log(event);
  heading.innerText = `You have pressed ${event.key} key`;
});
