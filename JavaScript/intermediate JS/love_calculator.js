function loveCalculator(a, b) {
  var love_percentage = Math.round((Math.random() * 100) + 1);
  console.log(`Well , ${a} loves ${b} , ${love_percentage} % 😍`);
}

var name1 = "person 1";
var name2 = "person 2";
loveCalculator(name1, name2);
