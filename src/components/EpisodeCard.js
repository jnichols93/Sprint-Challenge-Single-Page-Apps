import React from "React";
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episodes, setEpisodes ]= useState([]);

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/episode/')
        .then(dataset => {
            // console.log(dataset.data);
            setEpisodes(dataset.data.results)
        }).catch(err => {
            console.log('Something went wrong in Epsiodes: ', error)
        })
    }, [])
    return (
        <section className="grid-view">
            {episodes.map(episode => (
                <EpisodeCard 
                key={episode.id}
                name={episode.name}
                airDate={episode.air_date}
                episode={episode.episode}
                />
            ))}
        </section>
    )
}