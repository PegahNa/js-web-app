// notesView.js

class NotesView {
  constructor(model, client) {
    this.client = client;
    this.model = model;
    this.MainContainer = document.querySelector("#main-container");
    this.Button1 = document.querySelector("#add-note-btn");
    this.Input1 = document.querySelector("#add-note-input");

    this.Button1.addEventListener("click", () => {
      this.model.addNote(this.Input1.value);
      this.displayNotes();
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    });
  }

  displayNotes() {
    this.MainContainer.innerHTML = "";

    // For each note, create and append a new element on the main container
    this.model.getNotes().forEach((element) => {
      const newElement = document.createElement("div");
      newElement.id = "note";
      newElement.textContent = element;
      this.MainContainer.appendChild(newElement);
    });
  }
}

module.exports = NotesView;
