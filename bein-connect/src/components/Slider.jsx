import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/Slider.css'

import digiturk1 from '../assets/images/digiturk1.png';
import digiturk2 from '../assets/images/digiturk2.png';
import digiturk3 from '../assets/images/digiturk3.jpeg';
import digiturk4 from '../assets/images/digiturk4.jpeg';
import digiturk5 from '../assets/images/digiturk5.jpeg';
import digiturk6 from '../assets/images/digiturk6.jpeg';
import digiturk7 from '../assets/images/digiturk7.jpeg';




function Slider() {

    const images = [
        { src: digiturk1, alt: 'Slide 1' },
        { src: digiturk2, alt: 'Slide 2' },
        { src: digiturk3, alt: 'Slide 3' },
        { src: digiturk4, alt: 'Slide 4' },
        { src: digiturk5, alt: 'Slide 5' },
        { src: digiturk6, alt: 'Slide 6' },
        { src: digiturk7, alt: 'Slide 7' },

    ];
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            {
                images.map((image, index) => (
                    <div key={index}>
                        <img className='carousel-images' src={image.src} alt={image.alt} />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Slider