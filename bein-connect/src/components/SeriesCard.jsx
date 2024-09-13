import React, { useEffect, useState } from 'react'
import '../css/SeriesCard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:3005";

function SeriesCard() {

    const [series, setSeries] = useState([]);
    const [todOriginals, setTodOriginals] = useState([]);
    const [fantasticEarths, setFantasticEarths] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getSeriesData = async () => {
        try {
            const response = await axios.get(BASE_URL + "/newSeries");
            if (response.data && response.data.length > 0) {
                setSeries(response.data);
            } else {
                setSeries([]);
            }
        } catch (error) {
            console.error("Veri çekme hatası", error);
        } finally {
            setLoading(false);
        }
    };

    const getTodOriginalsData = async () => {
        try {
            const response = await axios.get(BASE_URL + "/todOriginals");
            if (response.data && response.data.length > 0) {
                setTodOriginals(response.data);
                console.log(response.data);
            } else {
                setTodOriginals([]);
            }
        } catch (error) {
            console.error("Veri çekme hatası", error);
        } finally {
            setLoading(false);
        }
    };

    const getFantasticEarthsData = async () => {
        try {
            const response = await axios.get(BASE_URL + "/fantasticEarths");
            if (response.data && response.data.length > 0) {
                setFantasticEarths(response.data);
                console.log(response.data);
            } else {
                setFantasticEarths([]);
            }
        } catch (error) {
            console.error("Veri çekme hatası", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSeriesData();
        getTodOriginalsData();
        getFantasticEarthsData();
    }, []);

    const handleCardClick = (item) => {
        navigate(`/series/${item.id}`, { state: { seriesItem: item } });

    };



    const handleMouseEnter = (item) => {
        setHoveredCard(item.id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    if (loading) {
        return <div>Veriler yükleniyor...</div>;
    }

    return (
        <div>
            <div className='category-title'>
                <h3 >Yeni Gelenler</h3>
            </div>

            <div className='card-list'>


                {
                    series.length > 0 ? (
                        series.map((item) => (
                            <div className='card-container' key={item.id} onClick={() => handleCardClick(item)}
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}>
                                {hoveredCard === item.id ? (
                                    <div className='hover-content'>
                                        <h6>{item.name}</h6>
                                        <p>{item.description}</p>
                                        <span>{item.time}</span>
                                    </div>
                                ) : (
                                    <><div className='image-container'>
                                        <img src={item.image} alt={item.name} />
                                    </div><div className='text-container'>
                                            <h6>{item.name}</h6>

                                        </div></>

                                )}
                            </div>
                        ))
                    ) : (
                        <div>Gösterilecek seri bulunamadı</div>
                    )
                }


            </div>

            <div className='category-title'>
                <h3 >TOD Originals</h3>
            </div>
            <div className='card-list'>
                {
                    todOriginals.length > 0 ? (
                        todOriginals.map((item) => (
                            <div className='card-container' key={item.id} onClick={() => handleCardClick(item)}
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}>
                                {hoveredCard === item.id ? (
                                    <div className='hover-content'>
                                        <h6>{item.name}</h6>
                                        <p>{item.description}</p>
                                        <span>{item.time}</span>
                                    </div>
                                ) : (
                                    <><div className='image-container'>
                                        <img src={item.image} alt={item.name} />
                                    </div><div className='text-container'>
                                            <h6>{item.name}</h6>

                                        </div></>

                                )}
                            </div>
                        ))
                    ) : (
                        <div>Gösterilecek seri bulunamadı</div>
                    )
                }
            </div>

            <div className='category-title'>
                <h3 >Fantastik Dünyalar</h3>
            </div>
            <div className='card-list'>
                {
                    fantasticEarths.length > 0 ? (
                        fantasticEarths.map((item) => (
                            <div className='card-container' key={item.id} onClick={() => handleCardClick(item)}
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}>
                                {hoveredCard === item.id ? (
                                    <div className='hover-content'>
                                        <h6>{item.name}</h6>
                                        <p>{item.description}</p>
                                        <span>{item.time}</span>
                                    </div>
                                ) : (
                                    <><div className='image-container'>
                                        <img src={item.image} alt={item.name} />
                                    </div><div className='text-container'>
                                            <h6>{item.name}</h6>

                                        </div></>

                                )}
                            </div>
                        ))
                    ) : (
                        <div>Gösterilecek seri bulunamadı</div>
                    )
                }
            </div>

        </div>

    );
}

export default SeriesCard;