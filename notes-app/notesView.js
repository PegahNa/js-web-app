// notesView.js

class NotesView {
  constructor(model) {
    this.model = model;
    this.MainContainer = document.querySelector("#main-container");
    this.Button1 = document.querySelector("#add-note-btn");
    this.Input1 = document.querySelector("#add-note-input");

    this.Button1.addEventListener("click", () => {
      this.model.addNote(this.Input1.value);
      this.displayNotes();
    });
  }

  displayNotes() {
    this.model.getNotes().forEach((element) => {
      const newElement = document.createElement("div");
      newElement.id = "note";
      newElement.textContent = element;
      this.MainContainer.appendChild(newElement);
    });
  }
}

module.exports = NotesView;
