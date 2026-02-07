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
