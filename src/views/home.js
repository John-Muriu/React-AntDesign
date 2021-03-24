import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/faetures'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />

        </div>
    );
}

export default AppHome