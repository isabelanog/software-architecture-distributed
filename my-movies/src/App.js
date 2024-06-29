import { Header } from "./components/Header";
import { Home } from "./view/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./view/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
