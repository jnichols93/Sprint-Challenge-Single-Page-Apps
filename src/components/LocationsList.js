import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
const [locations, setLocations] = useState([]);

useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
        .then(dataset => {
            // console.log(dataset.data.results);
            setLocations(dataset.data.results)
        }).catch(err => {
            console.log('Something went wrong with the list', err);
        })
}, [])

return (
    <section className="grid-view">
        {locations.map(location => (
            <LocationCard
                key={location.id}
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents}
            />
        ))}
    </section>
)
}