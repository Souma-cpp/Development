a = 1;
b = "1";

if (a === b) {
  console.log("yes");
} else {
  console.log("no");
}

if (a == b) {
  console.log("yes");
} else {
  console.log("no");
}

a = false;
b = false;

if (a && b) {
  console.log("both true");
} else if (a || b) {
  console.log("any one is true");
} else {
  console.log("both false");
}
