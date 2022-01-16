import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":pageId" element={<Home />} />
        <Route path="coins" element={<Coins />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
