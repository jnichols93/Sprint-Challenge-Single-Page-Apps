import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharecterCard from './CharacterCard'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[charecters, setCharecters]=useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(dataset => {
        // console.log(dataset.data.results);
        setCharacters(dataset.data.results);
      }).catch(err => {
        console.log('Something went wrong: ', err);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );

