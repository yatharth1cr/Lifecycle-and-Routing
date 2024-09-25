import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bookly from "./Bookly";
import Got from "./Got";
import Help from "./HelpAndSupport";
import Articles from "./Articles";

function Main() {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/people" element={<Got />} />
        <Route path="/books" element={<Bookly />} />
        <Route path="/articles/:slug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default Main;
