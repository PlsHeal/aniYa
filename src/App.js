import Navbar from "./components/navbar.components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularSection from "./components/popular.components";
import RecentSection from "./components/recent.components";
import AnimeSection from "./components/anime.components";
import MangaSection from "./components/manga.components";
import OtherSection from "./components/others.components";
import ProfileSection from "./components/profile.components";
import MainSection from "./components/main.components";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{marginTop: "80px"}}>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/popular" element={<PopularSection />} />
          <Route path="/recent" element={<RecentSection />} />
          <Route path="/anime" element={<AnimeSection />} />
          <Route path="/manga" element={<MangaSection />} />
          <Route path="/others" element={<OtherSection />} />
          <Route path="/profile" element={<ProfileSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
