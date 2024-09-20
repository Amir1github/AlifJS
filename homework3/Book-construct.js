function Book(title, author, year, genre){
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}
const book1 = new Book("HarryPotter", "JoanRowling", "2005", "fantastic");
const book2 = new Book("Capital", "CarlMarks", "1867", "encyclopidy");
console.log(book1, book2);
