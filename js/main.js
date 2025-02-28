
function searchBooks() {
    let searchQuery = document.getElementById('searchInput').value.trim();
    
    if (searchQuery === "") {
        alert("Please enter a search term!");
        return;
    }

    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=10`;
fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debug: check the API response
            displayBooks(data.docs);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayBooks(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    if (books.length === 0) {
        resultsDiv.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-container");

        const title = book.title || "No Title";
        const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";
        const coverId = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/150";
        bookDiv.innerHTML = `
            <img src="${coverId}" alt="Book Cover">
            <h3>${title}</h3>
            <p>Author: ${author}</p>
        `;

        resultsDiv.appendChild(bookDiv);
    });
}


