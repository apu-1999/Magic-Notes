console.log("Welcome to notes taking web app!");
showNotes();
let addbtn = document.getElementById('addbtn');
//console.log(addbtn);
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    notes_obj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notes_obj));
    addtxt.value = '';
    console.log(notes_obj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    let html = '';
    notes_obj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notes_obj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerText = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    console.log("I am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    notes_obj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes_obj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
let CardTitle = document.getElementById("CardTitle");
//console.log(CardTitle);
//CardTitle.innerHTML = "contentEditable="true""