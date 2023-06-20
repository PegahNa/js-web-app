/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    // 1. Setting up model and view
    const model = new NotesModel();
    model.addNote("A first note");
    model.addNote("Another one");
    const view = new NotesView(model);
    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll("div.note")).not.toBeNull();
    expect(document.querySelectorAll("div").length).toBe(3);
  });
});
