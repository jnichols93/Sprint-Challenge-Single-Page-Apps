import React from "React";
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episodes, setEpisodes ]= useState([]);