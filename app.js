const fs = require("fs");

fs.appendFile("notes.txt", "data to append", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
