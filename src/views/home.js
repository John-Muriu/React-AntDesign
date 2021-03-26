import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/faetures'
import AppWork from '../components/home/work'
import AppFaq from '../components/home/faq'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWork />
            <AppFaq />

        </div>
    );
}

export default AppHome