function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  if (!main){
    console.error("Error: No element found in the DOM.");
    return;
  }
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
