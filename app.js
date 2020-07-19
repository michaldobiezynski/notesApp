const validator = require("validator");
const chalk = require("chalk");

console.log(chalk.green.inverse.bold("Success!"));

const myNotes = require("./notes");

myNotes();

console.log(validator.isURL("asdahttps://mead.iodads/s"));
