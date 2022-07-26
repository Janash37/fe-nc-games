import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ReviewsHome from "./components/ReviewsHome";
import AllReviews from "./components/AllReviews";
import DeckBuilding from "./components/DeckBuilding";
import Dexterity from "./components/Dexterity";
import EngineBuilding from "./components/EngineBuilding";
import HiddenRoles from "./components/HiddenRoles";
import PushYourLuck from "./components/PushYourLuck";
import RollAndWrite from "./components/RollAndWrite";
import Strategy from "./components/Strategy";

//USER CONTEXT
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<ReviewsHome />} />
            <Route path="/reviews/all" element={<AllReviews />}></Route>
            <Route
              path="/reviews/deck-building"
              element={<DeckBuilding />}
            ></Route>
            <Route path="/reviews/dexterity" element={<Dexterity />}></Route>
            <Route
              path="/reviews/engine-building"
              element={<EngineBuilding />}
            ></Route>
            <Route
              path="/reviews/hidden-roles"
              element={<HiddenRoles />}
            ></Route>
            <Route
              path="/reviews/push-your-luck"
              element={<PushYourLuck />}
            ></Route>
            <Route
              path="/reviews/roll-and-write"
              element={<RollAndWrite />}
            ></Route>
            <Route path="/reviews/strategy" element={<Strategy />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
