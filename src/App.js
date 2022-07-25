import "./App.css";

import { useState } from "react";

//COMPONENTS
import Header from "./components/Header";

//USER CONTEXT
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
