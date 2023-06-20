const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

const model = new NotesModel();

console.log(model.getNotes());
