import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
//import Api from '../../services/api';

function Exit(){

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/carrinho'><AiOutlineShoppingCart/></Link>
                </nav>
            </header>

            <div id='Exit_Container'>
                <h2>Tem certeza que gostaria de sair .</h2>
                
                <div id='Button_Container'>
                    <button id='BTN_Exit' >Sim</button>
                    <button id='BTN_Exit' >Não</button>
                </div>

            </div>
                
        </div>
    );
}
export default Exit;