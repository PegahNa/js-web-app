const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  describe("getNotes", () => {
    it("Returns all notes", () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });
  });

  describe("addNote", () => {
    it("adds a todo", () => {
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.addNote("Go to the gym");
      expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
    });
  });

  describe("reset", () => {
    it("clears the notes", () => {
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.reset();
      expect(model.getNotes()).toEqual([]);
    });
  });
});
