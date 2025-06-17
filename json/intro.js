const file = require("./file.json");

const stringed_data = JSON.stringify(file);
console.log(stringed_data);

const parsed_data = JSON.parse(stringed_data);
console.log(parsed_data);
