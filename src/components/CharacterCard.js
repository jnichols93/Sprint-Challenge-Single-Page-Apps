import React from "react";
export default function CharacterCard({ name, status, species, origin, location, image }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h2 className="header">{name}</h2>
        <div className="meta">
          <span className="date">{species} {status}</span>
        </div>
        <div className="description">
          <p>Location: {location}</p>
          <p>Origin: {origin}</p>
        </div>
      </div>
    </div>
  )
}
