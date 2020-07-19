const validator = require("validator");
const chalk = require("chalk");

// console.log(chalk.green.inverse.bold("Success!"));

// const myNotes = require("./notes");

// myNotes();

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
