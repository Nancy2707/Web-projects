// script.js
let notes = [];

function saveNote() {
    const titleInput = document.getElementById('note-title');
    const contentInput = document.getElementById('note-content');

    const title = titleInput.value;
    const content = contentInput.value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content for the note.');
        return;
    }

    const note = {
        id: Date.now(),
        title,
        content
    };

    notes.push(note);
    displayNotes();
    clearInputs();
}

function displayNotes() {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        const titleElem = document.createElement('h2');
        titleElem.classList.add('note-title');
        titleElem.textContent = note.title;

        const contentElem = document.createElement('p');
        contentElem.classList.add('note-content');
        contentElem.textContent = note.content;

        noteDiv.appendChild(titleElem);
        noteDiv.appendChild(contentElem);

        noteList.appendChild(noteDiv);
    });
}

function clearInputs() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
}
