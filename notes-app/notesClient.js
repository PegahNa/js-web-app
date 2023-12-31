class NotesClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = NotesClient;

// loadNotes
// uses fetch to request the list of notes from the backend.
