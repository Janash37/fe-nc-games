import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ReviewsHome from "./components/ReviewsHome";
import AllReviews from "./components/AllReviews";
import IndividualReview from "./components/IndividualReview";

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
            <Route path="/reviews/:category" element={<AllReviews />}></Route>
            <Route
              path="/reviews/review/:review_id"
              element={<IndividualReview />}
            ></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
