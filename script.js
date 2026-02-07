const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

function vibrate(){
  if(navigator.vibrate){
    navigator.vibrate(40);
  }
}

// Load saved notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

// Add new note
addBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if(text === "") return;

  vibrate();
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
});

// Render notes
function renderNotes(){
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const text = document.createElement("p");
    text.textContent = note;

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "×";
    delBtn.onclick = () => deleteNote(index);

    noteDiv.appendChild(text);
    noteDiv.appendChild(delBtn);
    notesContainer.appendChild(noteDiv);
  });
}

// Delete note
function deleteNote(index){
  vibrate();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
