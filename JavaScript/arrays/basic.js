let players = ["virat", "rohit", "hardik", "surya", "bumrah"];

let favourite = "Virat  Kohli";

if (players.includes(favourite.toLowerCase().split(" ")[0])) {
  console.log("Yes, " + favourite + " is in the list of players.");
} else {
  console.log("No, " + favourite + " is not in the list of players.");
}

players.push("shreyas");
console.log("Updated players list: " + players);
players.push("nitish");
players.push("ishan");
console.log("Updated players list: " + players);
players.pop();
console.log("the updated players list is: " + players);
