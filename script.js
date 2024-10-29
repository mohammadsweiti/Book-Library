document.addEventListener("DOMContentLoaded", loadBooks);

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();

  if (!title || !author) {
    alert("Please enter both title and author.");
    return;
  }

  const book = { id: Date.now(), title, author, genre, read: false };
  const books = getBooks();
  books.push(book);
  saveBooks(books);
  displayBooks(books);
  clearForm();
}

function markAsRead(id) {
  const books = getBooks();
  const book = books.find(b => b.id === id);
  book.read = !book.read;
  saveBooks(books);
  displayBooks(books);
}

function addToReadingList(id) {
  const books = getBooks();
  const readingList = getReadingList();
  const book = books.find(b => b.id === id);
  if (readingList.find(b => b.id === id)) {
    alert("Book is already in the reading list.");
    return;
  }
  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));
  displayReadingList();
}

function searchBooks() {
  const query = document.getElementById("search").value.toLowerCase();
  const books = getBooks();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
}

function getBooks() {
  return JSON.parse(localStorage.getItem("books") || "[]");
}

function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

function getReadingList() {
  return JSON.parse(localStorage.getItem("readingList") || "[]");
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
      <div class="book-info">
        <strong>${book.title}</strong> by ${book.author} (${book.genre || "Unknown Genre"})
        <br>Status: ${book.read ? "Read" : "Unread"}
      </div>
      <div class="actions">
        <button onclick="markAsRead(${book.id})">${book.read ? "Unread" : "Read"}</button>
        <button onclick="addToReadingList(${book.id})">Add to Reading List</button>
        <a href="book-details.html?id=${book.id}">View Details</a>
      </div>
    `;
    bookList.appendChild(bookItem);
  });
}

function displayReadingList() {
  const readingList = getReadingList();
  const readingListContainer = document.getElementById("readingList");
  readingListContainer.innerHTML = "";

  readingList.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.className = "book-item";
    bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.genre || "Unknown Genre"})`;
    readingListContainer.appendChild(bookItem);
  });
}

function loadBooks() {
  displayBooks(getBooks());
  displayReadingList();
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "";
}
