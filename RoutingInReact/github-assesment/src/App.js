import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main.js";
import Header from "./components/Header.js";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Router>
          <Sidebar />
          <Main />
        </Router>
      </div>
    </>
  );
}

export default App;
