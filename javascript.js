const myLibrary = [{title: "Gardens of the Moon", author: "Steven Erikson", pages: "712", read: "Yes"},
    {title: "Deadhouse Gates", author: "Steven Erikson", pages: "943", read: "Yes"},
    {title: "Memories of Ice", author: "Steven Erikson", pages: "1187", read: "Yes"}
];

const dialog = document.querySelector("dialog");
const bookButton = document.querySelector(".bookButton");
const submitButton = document.querySelector(".submitButton");
const libDisplay = document.querySelector('.library-display');

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
    libDisplay.textContent = ""; // reset display first
    for (const [i, book] of myLibrary.entries()) { //entries retrieves index (i)
        book.index = i; // add index as a property for each object
        let card = document.createElement('div');
        card.setAttribute("class", "book-card");
        libDisplay.appendChild(card);
        let title = document.createElement("h2");
        let author = document.createElement("h3");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let remove = document.createElement("button");
        let tog = document.createElement("button");
        remove.setAttribute("class", "removeButton");
        remove.setAttribute("data", i); // add index as attribute
        tog.setAttribute("class", "togButton");
        tog.setAttribute("data", i);
        title.textContent = book.title;
        author.textContent = "by " + book.author;
        pages.textContent = "Page count: " + book.pages;
        read.textContent = "Read: " + book.read;
        remove.textContent = "X";
        tog.textContent = "Change read status"
        card.append(title, author, pages, read, tog, remove);
    }
}

function removeBook(e) {
    let ind = Number(e.target.getAttribute("data"));
    const target = e.target.closest(".removeButton");
    if(target) {
        myLibrary.splice(ind, 1);
        displayLibrary();
    }
}

function toggleRead(e) {
    let ind = Number(e.target.getAttribute("data"));
    const target = e.target.closest(".togButton");
    if(target) {
        if(myLibrary[ind].read === "No") {
            myLibrary[ind].read = "Yes"
        } else {
            myLibrary[ind].read = "No"
        }
        displayLibrary();
    }
}

libDisplay.addEventListener("click", (e) => {
    removeBook(e);
    toggleRead(e);
})

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