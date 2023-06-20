// notesView.js

class NotesView {
  constructor(model) {
    this.model = model;
    this.MainContainer = document.querySelector("#main-container");
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
