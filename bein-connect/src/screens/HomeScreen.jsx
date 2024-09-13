import { useState } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import '../css/HomeScreen.css';
import SeriesCard from '../components/SeriesCard';
import Footer from '../components/Footer';
function HomeScreen() {
    return (
        <div>
            <Header />
            <Slider />

            <SeriesCard />

            <Footer />
        </div>
    )
}

export default HomeScreen