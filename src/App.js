import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Navbar from "./components/navbar/navbar.component";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Donations from "./pages/donations/donations.page";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
