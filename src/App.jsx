import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EventDetails from "./pages/EventDetails";
import AnnouncementPopup from "./components/AnnouncementPopup";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Friends from "./pages/Friends";
import TeamBuilder from "./pages/TeamBuilder";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AnnouncementPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventName" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/team-builder" element={<TeamBuilder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;