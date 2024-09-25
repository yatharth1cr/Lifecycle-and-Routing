import articles from "../data/articles.json";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <ul className="articles-ul">
      {articles.map((article, i) => (
        <li key={i}>
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          <p>{article.author}</p>
        </li>
      ))}
    </ul>
  );
}
