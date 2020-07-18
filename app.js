const validator = require("validator");

const myNotes = require("./notes");

myNotes();

console.log(validator.isURL("asdahttps://mead.iodads/s"));
