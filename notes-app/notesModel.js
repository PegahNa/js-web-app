class NotesModel {
  constructor() {
    this.notes = [];
  }

  setNotes(data) {
    return this.data;
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
