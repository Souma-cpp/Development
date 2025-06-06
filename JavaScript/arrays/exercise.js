function whosPaying(names) {
  var n = names.length;
  var index = Math.round(Math.random() * n);
  return `${names[index]} is going to buy lunch today!`;
}

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);
//Michael is going to buy lunch today!
