const myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

const dialog = document.querySelector("dialog");
const bookButton = document.querySelector(".bookButton");
const submitButton = document.querySelector(".submitButton");

// "Show the dialog" button opens the dialog modally
bookButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
submitButton.addEventListener("click", () => {
  dialog.close();
});