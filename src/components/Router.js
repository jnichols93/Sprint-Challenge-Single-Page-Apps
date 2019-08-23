import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationsList from "./LocationsList";
import WelcomePage from "./WelcomePage";

const Router = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/episodes" component={EpisodeList} />
        </div>
    )
}

export default Router;