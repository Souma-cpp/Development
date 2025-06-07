// const bellboy = {
//   name: "Tommy",
//   age: 25,
//   workpermit: true,
//   languages: ["French", "Spanish", "English", "Korean"],
// };

function Bellboy(name, age, workpermit, languages) {
  this.name = name;
  this.age = age;
  this.workpermit = workpermit;
  this.languages = languages;
  move();
}

const jimmy = new Bellboy("Jimmy", 25, true, ["French", "Spanish"]);
const tommy = new Bellboy("tommy", 23, true, [
  "French",
  "Spanish",
  "English",
  "Korean",
]);
const steve = new Bellboy("steve", 20, true, ["Japaneese"]);

function find_best(bellboy1, bellboy2) {
  if (
    bellboy1.age < bellboy2.age &&
    bellboy1.languages.length > bellboy2.languages.length &&
    bellboy1.workpermit === true &&
    bellboy2.workpermit == true
  ) {
    console.log(`${bellboy1.name} is the best`);
  } else if (
    bellboy2.workpermit == true &&
    bellboy1.age > bellboy2.age &&
    bellboy1.languages.length < bellboy2.languages.length &&
    bellboy1.workpermit === true
  ) {
    console.log(`${bellboy2.name} is the best`);
  } else {
    console.log("No one is best");
  }
}

find_best(jimmy, tommy);
find_best(tommy, steve);

function move() {
  console.log("bellboy moved");
}
