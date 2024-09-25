import books from "../data/books.json";

export default function Bookly() {
  return (
    <>
      <header className="bookly-head">
        <h2>Bookly</h2>
      </header>
      <main>
        <div className=" list">
          <ul className="bookly-ul">
            {books.map((book, i) => (
              <li key={i}>
                <img src={book.image} alt={book.author} />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <a href={book.website}>
                  <button>Buy Now!</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
