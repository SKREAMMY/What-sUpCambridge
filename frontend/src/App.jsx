import { useState } from "react";
import "./App.css";
import Header from "./components/headerComponent/Header";
import Footer from "./components/footerComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import LinksPage from "./pages/Links/LinksPage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/links" element={<LinksPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
