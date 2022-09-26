import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroList from "./components/HeroList/HeroList";
import Search from "./components/Search/Search";

function App() {
  const [heros, setHeros] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => res.json())
      .then((data) => setHeros(data.data));
  }, []);

  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };

  const filteredHero = heros.filter((hero) => {
    return hero.displayName.toLowerCase().includes(search);
  });

  return (
    <div className="App">
      <Header title="Valorant Characters" />
      <Search searchChange={searchChange} />
      <HeroList filteredHero={filteredHero} />
    </div>
  );
}

export default App;
