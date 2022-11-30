import React from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
//import Api from '../../services/api';

function Carrinho(){

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/exit'><ImExit/></Link>
                </nav>
            </header>

            <div id='Carrinho_Container'>
                <h1>carrinho</h1>
            </div>
                
        </div>
    );
}
export default Carrinho;