//import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import ComicsGrid from "./Components/ComicsGrid";
import DetailsComics from "./Components/DetailsComics";
import ComicsList from "./Components/ComicList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <div className="top">
        <header>
          <h1>ComicBook</h1>
        </header>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ComicsGrid />} />
          <Route exact path="/detailsComics" element={<DetailsComics />} />
          <Route exact path="*" element={<ComicsList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
