import express from "express";
import fs from "fs";

const app = express();
const filename = "library.json";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = [];

if (fs.existsSync(filename)) {
  const fileContent = fs.readFileSync(filename, "utf8");
  data = JSON.parse(fileContent);
} else {
  fs.writeFileSync(filename, JSON.stringify([], null, 4));
}


app.get("/", (req, res) => {
  res.send(`
    <h1>Library Management System</h1>
    <form action="/add" method="post">
      <input type="text" name="title" placeholder="Book Title" required /><br><br>
      <input type="text" name="author" placeholder="Author" required /><br><br>
      <input type="number" name="year" placeholder="Year" required /><br><br>
      <button type="submit">Add Book</button>
    </form>
    <br>
    <a href="/books">View All Books</a>
  `);
});


app.post("/add", (req, res) => {
  const { title, author, year } = req.body;

  const newBook = {
    id: Date.now(),
    title,
    author,
    year: Number(year)
  };
  data.push(newBook);

  fs.writeFileSync(filename, JSON.stringify(data, null, 4));

  res.send(`
    <h2>Book Added Successfully!</h2>
    <a href="/">Go Back</a><br>
    <a href="/books">View Books</a>
    <a href="/delete/${newBook.id}">Delete This Book</a>
  `);
});


app.get("/books", (req, res) => {
  let bookList = "<h1>Books in Library</h1><ul>";

  data.forEach((b) => {
    bookList += `<li>${b.title} by ${b.author} (${b.year})</li>`;
  });

  bookList += "</ul><a href='/'>Add Books</a>";


  res.send(bookList);
});
app.get("/delete/:id", (req, res) => {  
    const bookid = Number(req.params.id);
    data = data.filter(book => book.id !== bookid);     
    fs.writeFileSync(filename, JSON.stringify(data, null, 4));  
    res.send(`
      <h2>Book Deleted Successfully!</h2>
        <a href="/books">View Books</a><br>
        <a href="/">Go Back</a>
    `); 
}); 

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});