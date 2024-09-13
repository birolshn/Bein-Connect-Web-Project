import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import '../css/DetailsScreen.css';
import Footer from '../components/Footer';

function DetailsScreen() {
    const location = useLocation();
    const { seriesItem } = location.state || {};

    if (!seriesItem) {
        return <div>Seri bilgisi bulunamadı.</div>;
    }
    return (
        <div>
            <Header />
            <Container className='details-body'>
                <Row>
                    <Col>
                        <img src={seriesItem.image} alt={seriesItem.name} />
                    </Col>
                    <Col xs={6} className='details-inner-body'>
                        <Row>
                            <h1>{seriesItem.name}</h1>
                        </Row>
                        <Row >
                            <Col><h4 className='series-details1'>Tür</h4></Col>
                            <Col><h4 className='series-details2'>: {seriesItem.type}</h4></Col>
                        </Row>
                        <Row >
                            <Col><h4 className='series-details1'>Süre</h4></Col>
                            <Col><h4 className='series-details2'>: {seriesItem.time}</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4 className='series-details1'>Yönetmen</h4></Col>
                            <Col><h4 className='series-details2'>: {seriesItem.director}</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4 className='series-details1'>Oyuncular</h4></Col>
                            <Col><h4 className='series-details2'>: {seriesItem.actors}</h4></Col>
                        </Row>
                        <hr />
                        <Row>
                            <p>{seriesItem.description}</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className='detail-button'>
                                <a className='inner-detail-button' href="">Giriş Yap</a>
                            </div>
                        </Row>
                        <Row>
                            <div className='detail-button'>
                                <a className='inner-detail-button' href="">Paketleri İncele</a>
                            </div>
                        </Row>
                        <Row>
                            <div className='detail-button-gray'>
                                <a className='inner-detail-button' href="">FRAGMAN İZLE</a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default DetailsScreen