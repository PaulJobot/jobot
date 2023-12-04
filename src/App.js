import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound/NotFound";

import './App.css';

function App() {

  const FooterWithColor = () => {
    let location = useLocation();
    let footerColor;

    switch (location.pathname) {
      case "/login":
      case "/tarifs":
        footerColor = 0;
        break;
      default:
        footerColor = 1
    }

    return <Footer color={footerColor} />

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <FooterWithColor />
      </BrowserRouter>
    </div>
  );
}

export default App;
