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

addBtn.addEventListener("click", () => {
  if(noteInput.value.trim() === "") return;

  vibrate();
  notes.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
});

function renderNotes(){
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note}
      <button class="delete" onclick="deleteNote(${index})">X</button>
    `;
    notesContainer.appendChild(div);
  });
}

function deleteNote(index){
  vibrate();
  notes.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}