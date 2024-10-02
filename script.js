const notescontainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

const inputbox = document.querySelectorAll(".input-box");


btn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let button = document.createElement("button");
    inputbox.className = "input-box";
    button.className="button";
    button.innerHTML="delete Notes";
    inputbox.setAttribute("contenteditable","true");
    notescontainer.appendChild(inputbox);
    notescontainer.appendChild(button);



let noteWrapper = document.createElement("div");
noteWrapper.className = "note-wrapper";

// Append the note and the button to the wrapper
noteWrapper.appendChild(inputbox);
noteWrapper.appendChild(button);

// Append the wrapper to the notes container
notescontainer.appendChild(noteWrapper);

// Add event listener to the delete button
button.addEventListener("click", () => {
    notescontainer.removeChild(noteWrapper); // Remove the note and its delete button
});
});
