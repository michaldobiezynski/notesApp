const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

// console.log(chalk.green.inverse.bold("Success!"));

// const myNotes = require("./notes");

// myNotes();

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

//customise yargs versionm
yargs.version("1.1.0");

//add, remove, read, list

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note!");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("listing notes!");
  },
});

//Create remove command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();

// console.log(yargs.argv);
