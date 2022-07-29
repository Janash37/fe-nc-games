import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ReviewsHome from "./components/ReviewsHome";
import AllReviews from "./components/AllReviews";
import Categories from "./components/Categories";
import IndividualReview from "./components/IndividualReview";
import Profile from "./components/Profile";

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
            <Route path="/category/:category" element={<Categories />}></Route>
            <Route
              path="/reviews/review/:review_id"
              element={<IndividualReview />}
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
