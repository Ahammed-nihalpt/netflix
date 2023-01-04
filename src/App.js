import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {
  Originals,
  Action,
  Comedy,
  Horror,
  Romance,
  Documentaries,
} from "./Urls";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" />
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={Comedy} title="Comedy" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
