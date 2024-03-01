import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Author from "./components/Author.js";
import PageNotFound from "./components/PageNotFound.js";
import Contact from "./components/Contact.js";
import Books from "./components/Books.js";
import Admin from "./components/Admin.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/author" element={<Author />} />
        <Route exact path="/book" element={<Books />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
