var books = [
  {
    isbn: '1234-HP',
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling'
  },
  {
    isbn: '12345-LOTR',
    title: 'The Lord of the Rings',
    author: 'J.R.R Tolkien'
  },
  {
    isbn: '12344-N',
    title: 'Narnia: The Lion, The Witch, and the Wardrobe',
    author: 'C.S. Lewis'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof books);

var stringifyBooks = JSON.stringify(books);
console.log('JSON.stringify(books):', stringifyBooks);
console.log('typeof stringifyBooks:', typeof stringifyBooks);

var student = '{ "ID": "UA-1A-1490", "Name": "Midoriya Izuku"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var parseStudent = JSON.parse(student);
console.log('parse(student):', parseStudent);
console.log('typeof parseStudent:', typeof parseStudent);
