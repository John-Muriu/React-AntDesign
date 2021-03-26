import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/faetures'
import AppWork from '../components/home/work'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWork />

        </div>
    );
}

export default AppHome