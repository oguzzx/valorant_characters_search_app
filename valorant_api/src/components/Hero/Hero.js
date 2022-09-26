import React from "react";
import "./hero.css";

function Hero({ hero }) {
  return (
    <div className="hero-container">
      <h1 className="hero-title">{hero.displayName}</h1>
      <img src={hero.displayIcon} />
      <p className="hero-desc">{hero.description}</p>
      <div className="role">
        <p className="hero-role">{hero.role.displayName}</p>
      </div>
      <p className="skills-container">
        {hero.abilities.map((skills) => {
          return (
            <div className="cntr">
              <img src={skills.displayIcon} />
              <h3 className="skills"> {skills.displayName}</h3>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Hero;
