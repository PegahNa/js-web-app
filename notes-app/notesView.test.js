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
    expect(document.querySelectorAll("#note")).not.toBeNull();
    expect(document.querySelectorAll("div").length).toBe(3);
  });

  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    // 1. Fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    // 2. Click the button
    const button = document.querySelector("#add-note-btn");
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll("#note").length).toEqual(1);
    expect(document.querySelectorAll("#note")[0].textContent).toEqual(
      "My new amazing test note"
    );
  });
});
