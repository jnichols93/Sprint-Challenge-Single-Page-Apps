import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div className="ui card">
      <div className="content">
        <h2 className="header">{name}</h2>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Dimension: {dimension}</p>
          <p>Residents: {residents.length}</p>
        </div>
      </div>
    </div>
  )
}

