import { Header } from "./components/Header";
import { Home } from "./view/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./view/About";
import { MovieDetail } from "./view/MovieDetail.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
