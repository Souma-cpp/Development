const fs = require("fs");

// fs.writeFileSync("message.txt", "hello from fs by file system");
// console.log("file has been saved");

function read_file(file) {
  try {
    var content = fs.readFileSync(file, "utf-8");
    console.log(`The content in the file is : ${content}`);
  } catch (err) {
    console.error(`Error reading file "${file}":`, err.message);
  }
}

read_file("message.txt");
