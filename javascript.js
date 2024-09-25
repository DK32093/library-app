const myLibrary = [{title: "The Hobbit", author: "J.R.R. Tolkien", pages: "800", read: "Yes"}];
const dialog = document.querySelector("dialog");
const bookButton = document.querySelector(".bookButton");
const submitButton = document.querySelector(".submitButton");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary() {
    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const newPage = document.querySelector("#pageCount").value;
    const newRead = document.querySelector('input[name="read"]:checked').value;
    const newBook = new Book(newTitle, newAuthor, newPage, newRead);
    myLibrary.push(newBook);
}

function displayLibrary() {
    const libDisplay = document.querySelector('.library-display');
    libDisplay.textContent = ""; // reset display first
    for (const book of myLibrary) {
        let card = document.createElement('div');
        card.textContent = book.title
        libDisplay.appendChild(card);
    }
}

// Show the new book form
bookButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close the form and add new book after submitting
submitButton.addEventListener("click", () => {
  dialog.close();
  addBookToLibrary();
  displayLibrary();
});

displayLibrary();