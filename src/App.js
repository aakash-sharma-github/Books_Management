import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Author from "./components/Author.js";
import Signup from "./components/Signup.js";
import Signin from "./components/Signin.js";
import Admin from "./components/Admin.js";
import PageNotFound from "./components/PageNotFound.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="signin" element={<Signin />} />
        <Route exact path="admin" element={<Admin />} />
        <Route exact path="author" element={<Author />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
