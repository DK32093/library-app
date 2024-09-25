const myLibrary = [];
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
    const newBook = new Book(newTitle, newAuthor, newPage, newRead)
    myLibrary.push(newBook);
}

// "Show the new book form
bookButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close the form after submitting
submitButton.addEventListener("click", () => {
  dialog.close();
  addBookToLibrary();
  console.log(myLibrary)
});