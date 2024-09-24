import books from "../data/books.json";
import "./bookly.css";
export default function Bookly() {
  return (
    <>
      <header>
        <h2>Bookly</h2>
      </header>
      <main>
        <div className="container list">
          <ul>
            {books.map((book, i) => (
              <li key={i}>
                <img src={book.image} alt={book.author} />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <a hrefLang={book.website}>
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

// let ul = document.querySelector('ul');

// books.forEach((arr) => {
//   let li = document.createElement('li');
//   let img = document.createElement('img');
//   img.src = arr.image;
//   img.width = '100';
//   let h3 = document.createElement('h3');
//   h3.innerText = arr.title;
//   h3.setAttribute('style', 'margin:10px 0;');
//   let p = document.createElement('p');
//   p.innerText = `Author: ${arr.author}`;
//   let a = document.createElement('a');
//   a.href = arr.website;
//   let btn = document.createElement('button');
//   btn.style.backgroundColor = '#377e80';
//   btn.innerText = 'Buy Now';
//   a.append(btn);
//   li.append(img, h3, p, a);
//   ul.append(li);
// });
