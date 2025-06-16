const btn = document.querySelector("button");
function click_event() {
  var paragraph = document.querySelector("p");
  paragraph.innerText = "Thank you for pressing the button sir :)";
  var heading = document.querySelector("h1");
  heading.innerText = "Have a great day sir";
}
btn.addEventListener("click", () => {
  click_event();
});
