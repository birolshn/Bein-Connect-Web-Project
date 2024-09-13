import React, { useState } from 'react'
import logo from '../assets/images/beinConnectLogo.png'
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isInputVisible, setInputVisible] = useState(false);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        setInputVisible(!isInputVisible);
    };

    const handleLogoClick = () => {
        navigate('/');
    };
    return (
        <div className='header'>
            <div className='inner-header'>
                <div className='logoDiv'>
                    <a onClick={handleLogoClick}>
                        <img className='logo' src={logo} alt="" />
                    </a>
                </div>
                <Dropdown >
                    <Dropdown.Toggle className='dropdown1'>
                        Paketler
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu1'>
                        <Dropdown.Item className='dropdown-item1' href="#/action-1">Spor</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item1' href="#/action-2">Eğlence</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className='dropdown2'>
                        İçerikleri Keşfet
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu2'>
                        <Dropdown.Item className='dropdown-item1' href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item1' href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item1' href="#/action-3">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='inner-header2'>
                <IconButton onClick={handleSearchClick} aria-label='search' >
                    <SearchIcon className='icon-button-style' />
                </IconButton>
                {
                    isInputVisible && (
                        <TextField placeholder='Search...' autoFocus sx={{
                            input: { color: 'white', flexDirection: 'row', alignItems: 'center' }, // Input metni rengini beyaz yapar
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    marginTop: 1.5,
                                    borderColor: '#001e42', // Border rengini beyaz yapar
                                },
                                '&:hover fieldset': {
                                    borderColor: '#001e42', // Hover rengini beyaz yapar
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#001e42', // Focus rengini beyaz yapar
                                },
                            },
                        }} />
                    )
                }

                <div className='header-button-style'>
                    <a className='inner-button-style' href="">Hemen Başvur</a>
                </div>
                <div className='header-button-style2'>
                    <a className='inner-button-style' href="">Giriş Yap</a>
                </div>
            </div>


        </div>
    )
}

export default Header