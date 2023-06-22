const NotesClient = require("./notesClient");
const NotesView = require("./notesView.js");
const NotesModel = require("./notesModel.js");

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model);
view.displayNotes();
