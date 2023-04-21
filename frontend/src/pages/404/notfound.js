import React from 'react';
import { Link } from 'react-router-dom';
import './notfound_style.css';
import Logo from '../assets/Logo.jpg'

function NotFound(){
    return(
        <div id='NotFaundContainer'>

            <div id='Content'>

                <Link id='lk'  to='/loja'>HOME</Link>
                <img id='Logo_img' src={Logo} alt='logo'/>

                <p id='Code'>4  0   4</p>
                

                <p id='Sorry'>Sorry, page notfound!</p>

            </div>
            
        </div>
    );

};
export default NotFound;