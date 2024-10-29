const API_URL = "https://yourapi.com/books"; // Replace with your actual API URL

// Fetch book details
async function fetchBookDetails(bookId) {
    try {
        const response = await fetch(`${API_URL}/${bookId}`);
        if (response.ok) {
            const book = await response.json();
            displayBookDetails(book);
        } else {
            document.getElementById("book-details").textContent = "No book selected.";
        }
    } catch (error) {
        console.error("Error fetching book details:", error);
    }
}

// Display book details in the UI
function displayBookDetails(book) {
    const bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>
        <img src="${book.coverImageUrl}" alt="Book Cover" class="book-cover">
    `;
}

// Add a new book to the API
async function addBookToLibrary(title, author, genre, coverImageUrl) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, author, genre, coverImageUrl })
        });
        if (response.ok) {
            const newBook = await response.json();
            console.log("Book added:", newBook);
        }
    } catch (error) {
        console.error("Error adding book:", error);
    }
}

// Fetch and display a specific book or show "No book selected" if no ID is provided
const bookId = /* get book ID from query params or selection */;
if (bookId) {
    fetchBookDetails(bookId);
} else {
    document.getElementById("book-details").textContent = "No book selected.";
}
