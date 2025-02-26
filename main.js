//fetch books//
async function fetchBooks(query){
    const url =`https://openlibrary.org/search.json?q=${query}`;
const response = await fetch(url);
const data =await response.json();
 return data.docs.map(book => ({
    title: book.title_suggest[0],
    author: book.author_name[0],
    publicationYear: book.first_publish_year,
    isbn: book.isbn_13[0]
 }));

}