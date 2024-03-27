import './App.css';
import React from "react";
import Page from "./Page/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Page />}> </Route>
            <Route path="*" element={<div>404 Not Found</div>}> </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
