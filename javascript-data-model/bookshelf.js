var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('The author, ' + bookshelf[1].author + ', wrote a book called "' + bookshelf[1].title + '," which covers syntax and parameters central to JSON objects definitions.');
console.log('ISBN: ' + bookshelf[0].isbn + ', is titled "' + bookshelf[0].title + ' and it is by ' + bookshelf[0].author + '.');
console.log('The book, "' + bookshelf[2].title + '," is written by ' + bookshelf[2].author + '. It discusses the theory of designing and building APIs in any language or framework to help curious readers understand and learn more about the world of API development.');
