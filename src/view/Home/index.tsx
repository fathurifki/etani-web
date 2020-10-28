import * as React from 'react';
import { HomeController } from './controller';
import HomeView from './components/HomeComponents';

const Home = () => {
    return (
        <HomeController>
            <HomeView />
        </HomeController>
    )
}

export default Home