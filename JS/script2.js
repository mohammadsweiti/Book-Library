const products = {
    data: [
        {
            title: "NCERT",
            author: "P JAGADEESH",
            subject: "Basic",
            date: "2022-01-31",
            image: "../img/NCER.jpg",
        },
        {
            title: "Cryptography",
            author: "P.J.BOSE",
            subject: "IT",
            date: "2022-11-11",
            image: "../img/crypto.jpg",
        },
        {
            title: "DBMS",
            author: "KAVERI S",
            subject: "IT",
            date: "2022-12-22",
            image: "../img/Database.jpg",
        },
        {
            title: "Computer Networks and Security",
            author: "PRIYANKA",
            subject: "CSE",
            date: "2022-03-20",
            image: "../img/cns.jpg",
        },
        {
            title: "Mental Peace",
            author: "Putin",
            subject: "Novel",
            date: "2022-11-10",
            image: "../img/Network.jpg",
        },
        {
            title: "Artificial Intelligence",
            author: "Harish P",
            subject: "ISE",
            date: "2022-12-20",
            image: "../img/Os.jpg",
        },
        {
            title: "System Design",
            author: "AmaRNADH.W",
            subject: "CSE",
            date: "2022-12-20",
            image: "../img/Sdesign.jpg",
        },
        {
            title: "Mathematics",
            author: "HARIKRISHNA",
            subject: "Basic",
            date: "2022-01-21",
            image: "../img/Maths.jpg",
        },
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            subject: "Fantasy",
            date: "1999-12-20",
            image: "../img/hp.jpg",
        },
        {
            title: "Operating System",
            author: "RAMA KRISHNA K",
            subject: "CSE",
            date: "2022-04-20",
            image: "../img/Nt.jpg",
        },
        {
            title: "Atomic Habits",
            author: "JEEVAN E",
            subject: "Novel",
            date: "1995-12-22",
            image: "../img/ah.jpg",
        },
        {
            title: "How to Win Friends and Influence People",
            author: "LEHAN FAYAZ",
            subject: "Novel",
            date: "2002-02-02",
            image: "../img/htw.jpeg",
        },
        {
            title: "Image Processing",
            author: "BHANU CHANDAR",
            subject: "ISE",
            date: "2021-12-20",
            image: "../img/wta.jpg",
        },
        {
            title: "Physics",
            author: "Nischitha E",
            subject: "Basic",
            date: "2022-12-20",
            image: "../img/Ncert.jpg",
        },
        {
            title: "UNIX",
            author: "Aakash Chopra",
            subject: "IT",
            date: "2022-08-08",
            image: "../img/Nt.jpg",
        },
    ],
};

// Function to render books
function renderBooks() {
    const booksContainer = document.getElementById("Books");
    booksContainer.innerHTML = ""; // Clear existing books

    products.data.forEach((book) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.setAttribute("src", book.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        let container = document.createElement("div");
        container.classList.add("container");

        let title = document.createElement("h5");
        title.classList.add("title");
        title.innerText = book.title.toUpperCase();
        container.appendChild(title);

        let author = document.createElement("h6");
        author.classList.add("author");
        author.innerText = book.author.toUpperCase();
        container.appendChild(author);

        let subject = document.createElement("h6");
        subject.classList.add("subject");
        subject.innerText = book.subject.toUpperCase();
        container.appendChild(subject);

        let date = document.createElement("h6");
        date.classList.add("date");
        date.innerText = book.date.toUpperCase();
        container.appendChild(date);

        card.appendChild(container);
        booksContainer.appendChild(card);
    });
}

// Load books on window load
window.onload = renderBooks;
