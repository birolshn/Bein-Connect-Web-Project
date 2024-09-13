import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppStore from '../assets/images/AppStoreLogo.png'
import GooglePlay from '../assets/images/GooglePlayLogo.png'
import AppGallery from '../assets/images/AppGalleryLogo.png'
import '../css/Footer.css';

function Footer() {
    return (
        <div className='footer-body'>
            <Container className='footer-container'>
                <Row className='footer-row'>
                    <Col>
                        <Row><h5>Yardım</h5></Row>
                        <Row><a className='footer-button' href="">Sıkça Sorulan Sorular</a></Row>
                    </Col>
                    <Col>
                        <Row><h5>Legal</h5></Row>
                        <Row><a className='footer-button' href="">Telif Hakkı Uyarısı</a></Row>
                        <Row><a className='footer-button' href="">Müşteri Aydınlatma Metni</a></Row>
                        <Row><a className='footer-button' href="">Çerez Aydınlatma Metni</a></Row>
                        <Row><a className='footer-button' href="">Çerez Ayarları</a></Row>
                        <Row><a className='footer-button' href="">Veri Sahibi Başvuru Formu</a></Row>

                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <IconButton color='white' aria-label='X' href='https://twitter.com/Digiturk' target='_blank' rel='noopener noreferrer'><XIcon sx={{ color: 'white' }} /></IconButton>
                            </Col>
                            <Col>
                                <IconButton color='white' aria-label='Facebook' href='https://www.facebook.com/Digiturk' target='_blank' rel='noopener noreferrer'><FacebookIcon sx={{ color: 'white' }} /></IconButton>
                            </Col>
                            <Col>
                                <IconButton color='white' aria-label='Instagram' href='https://www.instagram.com/digiturk/' target='_blank' rel='noopener noreferrer'><InstagramIcon sx={{ color: 'white' }} /></IconButton>
                            </Col>
                            <Col>
                                <IconButton color='white' aria-label='Youtube' href='https://www.instagram.com/digiturk/' target='_blank' rel='noopener noreferrer'><YoutubeIcon sx={{ color: 'white' }} /></IconButton>
                            </Col>
                            <Col>
                                <IconButton color='white' aria-label='LinkedIn' href='https://www.instagram.com/digiturk/' target='_blank' rel='noopener noreferrer'><LinkedInIcon sx={{ color: 'white' }} /></IconButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>

                    <hr />
                </Row>
                <Row>
                    <Col><p>Digiturk bir beIN MEDIA GROUP kuruluşudur. © 2024 Her hakkı saklıdır.</p></Col>
                    <Col>
                        <Row>
                            <Col><a href="https://apps.apple.com/tr/app/bein-connect/id603336861"><img className='footer-image2' src={AppStore} alt="" /></a></Col>
                            <Col>
                                <a href="https://play.google.com/store/apps/details?id=com.digiturk.iq.mobil&hl=en"><img className='footer-image' src={GooglePlay} alt="" /></a></Col>
                            <Col><a href=""><img className='footer-image' src={AppGallery} alt="" /></a></Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer