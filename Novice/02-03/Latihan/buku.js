var books = [
    {name : 'Javascript', hal: 50},
    {name : 'Css', hal : 60},
    {name : 'Html', hal : 70}
];

/* Pola Imperatif*/
    for (var i = 0; i <books.length; i ++) {
    books [i].lastRead = new Date ();
}

/* Pola Deklaratif */
books.map ((book) => {
    book.lastReadBy = 'Bagus';
    return book;
});

console.log (books);