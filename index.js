// Function to save the note in Local Storage and display it on the page
function saveNote() {
    const note = document.getElementById('note').value;
    if (note) {
        let notes = localStorage.getItem('notes');
        notes = notes ? JSON.parse(notes) : [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        document.getElementById('note').value = ''; // Clear the textarea
        document.getElementById('p1').innerHTML="Note saved sucessfully";
       // alert('Note saved!');
    } else {
        document.getElementById('p1').innerHTML='Please write a note before saving.';
       // alert('Please write a note before saving.');
       $(document).ready(function(){
        $("#button1").click(function(){
            $("#p1").fadeToggle(1000);
           })
       })
       
    }
}

// Function to display saved notes on the page
function displayNotes() {
    const notes = localStorage.getItem('notes');
    const savedNotesDiv = document.getElementById('savedNotes');
    savedNotesDiv.innerHTML = ''; // Clear existing notes
    if (notes) {
        JSON.parse(notes).forEach(note => {
            const noteElement = document.createElement('p');
            noteElement.textContent = note;
            savedNotesDiv.appendChild(noteElement);
        });
    }
}

// Function to download the notes as a file
function downloadNotes() {
    const notes = localStorage.getItem('notes');
    if (notes) {
        const blob = new Blob([notes], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        document.getElementById('p1').innerHTML='No notes found to download!';
        //alert('No notes found to download!');
        $(document).ready(function(){
            $("#button2").click(function(){
                $("#p1").slideDown(1000);
               })
           })
    }
}

// Function to clear all notes
function clearNotes() {
    localStorage.removeItem('notes');
    displayNotes();
    document.getElementById('p1').innerHTML='All notes cleared!';
    //alert('All notes cleared!');
    $(document).ready(function(){
        $("#button3").click(function(){
            $("#p1").fadeToggle(1000);
           })
       })
}

// Load and display saved notes when the page loads
window.onload = function() {
    displayNotes();
}

