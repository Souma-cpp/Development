function change_heading(r1, r2, heading) {
  if (r1 > r2) {
    heading.innerText = "Winner : Player 1";
  } else if (r1 === r2) {
    heading.innerText = "It's a draw";
  } else {
    heading.innerText = "Winner : Player 2";
  }
}

var random_number1 = Math.round(Math.random() * 5 + 1);
var image1 = document.querySelector(".img1");
var newimage = `./images/dice${random_number1}.png`;
console.log(newimage);
image1.setAttribute("src", newimage);

var random_number2 = Math.round(Math.random() * 5 + 1);
var image2 = document.querySelector(".img2");
var newimage2 = `./images/dice${random_number2}.png`;
console.log(newimage2);
image2.setAttribute("src", newimage2);

var heading = document.querySelector("h1");
change_heading(random_number1, random_number2, heading);

var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  window.location.reload();
});
