import { useState } from "react";
import data from "../data/got.json";

export default function Got() {
  const [searchTerm, setSearchTerm] = useState("");

  let allPeople = data.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    // console.log('acc');
    return acc;
  }, []);

  let filteredPeople = allPeople.filter((person) =>
    person.name.toLowerCase().includes(searchTerm)
  );

  // console.log(filteredPeople, "filteredPeople");
  // console.log(allPeople, "allpeople");

  return (
    <>
      <header className="got-head">
        <h1 className="center">👑Peoples of GOT</h1>
      </header>
      <main className="got-main-container">
        <input
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={({ target }) => {
            setSearchTerm(target.value);
          }}
        />
        <ul className="got-ul got-container flex wrap">
          {filteredPeople.length === 0 ? (
            <p className="center">No people found!</p>
          ) : (
            ""
          )}
          {filteredPeople.map((people, i) => (
            <li key={i} className="flex center column">
              <div className="got-card-content">
                <img src={people.image} alt={people.name} />
                <h2 className="center">{people.name}</h2>
              </div>
              <p>{people.description}</p>
              <a href={people.wikilink}>
                <button>Learn more!</button>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
