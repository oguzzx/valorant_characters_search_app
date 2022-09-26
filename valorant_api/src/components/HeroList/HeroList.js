import React from "react";
import Hero from "../Hero/Hero";
import "./heroList.css";

function HeroList({ filteredHero }) {
  return (
    <div className="hero-list">
      {filteredHero.map((hero) => {
        return <Hero hero={hero} />;
      })}
    </div>
  );
}

export default HeroList;
