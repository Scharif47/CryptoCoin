import { Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="coins" element={<Coins />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
        <Route path="*" element={<h1>There is nothing here.</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
