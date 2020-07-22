const fs = require("fs");

const chalk = require("chalk");

const getNotes = () => {
  console.log("Your notes");
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.magenta.inverse.bold("Your notes:"));
  notes.forEach((note) => {
    console.log(chalk.blue.inverse.bold("- " + note.title));
  });
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToStay = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToStay.length === notes.length) {
    console.log(chalk.red.inverse.bold("No note found!"));
  } else {
    console.log(chalk.green.inverse.bold("Note removed!"));
    saveNotes(notesToStay);
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  noteToBeRead = notes.find((note) => note.title === title);

  if (noteToBeRead) {
    console.log(chalk.magenta.inverse.bold("Title: " + noteToBeRead.title));
    console.log(chalk.green.inverse.bold("body: " + noteToBeRead.body));
  } else {
    console.log(chalk.red.inverse.bold("No note found."));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse.bold("New note added!"));
  } else {
    console.log(chalk.red.inverse.bold("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
