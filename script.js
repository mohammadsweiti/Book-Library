document.addEventListener("DOMContentLoaded", loadBooks);

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();

  if (!title || !author) {
    alert("Please enter both title and author.");
    return;
  }

  const book = { title, author, genre, read: false };
  const books = getBooks();
  books.push(book);
  saveBooks(books);
  displayBooks(books);
  clearForm();
}

function markAsRead(index) {
  const books = getBooks();
  books[index].read = !books[index].read;
  saveBooks(books);
  displayBooks(books);
}

function addToReadingList(index) {
  const books = getBooks();
  const readingList = getReadingList();
  const book = books[index];
  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));
  displayReadingList();
}

function searchBooks() {
  const query = document.getElementById("search").value.toLowerCase();
  const books = getBooks();
  const filteredBooks = books.filter(
    (book) => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
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

  books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
      <div class="book-info">
        <strong>${book.title}</strong> by ${book.author} (${book.genre || "Unknown Genre"})
        <br>
        Status: ${book.read ? "Read" : "Unread"}
      </div>
      <div class="actions">
        <button onclick="markAsRead(${index})">${book.read ? "Unread" : "Read"}</button>
        <button onclick="addToReadingList(${index})">Add to Reading List</button>
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
async function fetchBooks() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fake API endpoint
  const books = await response.json();
  displayBooks(books);
}


function displayBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = books.map(book => `
    <div class="book">
      <h3>${book.title}</h3>
      <p>${book.body.substring(0, 100)}...</p>
      <a href="book-details.html?id=${book.id}">Read more</a>
    </div>
  `).join('');
}

function searchBooks() {
  const query = document.getElementById('search').value.toLowerCase();
  const bookList = document.querySelectorAll('.book');
  bookList.forEach(book => {
    const title = book.querySelector('h3').textContent.toLowerCase();
    book.style.display = title.includes(query) ? 'block' : 'none';
  });
}

if (window.location.pathname.endsWith('books.html')) {
  fetchBooks();
}
