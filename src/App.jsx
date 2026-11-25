import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Shopping from "./pages/Shopping.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/lista" element={<Shopping items={items} setItems={setItems} />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
