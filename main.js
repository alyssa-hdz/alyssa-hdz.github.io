//fetch books//
async function fetchBooks(query){
    const url =`https://openlibrary.org/search.json?q=${query}`;
const response = await fetch(url);
const data =await response.json();
 return data.docs.map(book => ({
    title: book.title_suggest[0],
    author: book.author_name[0],
    publicationYear: book.first_publish_year,
    cover: {
        i: book.cover_i? `https://covers.openlibrary.org/b/isbn/${book.cover_i}-M.jpg` : 'No cover image'
    }
 }));

}

//search books//
async function searchBooks(query)
{
    const books=await fetchBooks(query);
    return books;
}

//render books//

function renderBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    if(books.length === 0) return;
    books.forEach(book => {
        const bookElement = document.createElement('li');
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Publication Year: ${book.publicationYear}</p>
            <p>Book: ${book.cover.i}</p>
        `;
        bookList.appendChild(bookElement);
    });
}

document.querySelector('button').addEventListener('click',async() =>{
    const query =document.querySelector('#query').ariaValueMax.trim();
    const books = await searchBooks(query);
    renderBooks(books);

    if(!query){
        alert('Please enter a term');
        return;
    }
    try{
        const book = fetchBooks(query);
        renderBooks([book]);
    }catch(error){
        alert('Error fetching books');
        console.error('error catching books',error);
        return;
    }
})

