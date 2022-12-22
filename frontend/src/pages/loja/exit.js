import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
//import Api from '../../services/api';

function Exit(){
    const History = useNavigate();
    const Exit = () => {
        localStorage.removeItem('user');
        console.log('exit');
        History('/');
    };
    const No_Exit = () => {
        console.log('no exit');
        History('/loja');
    };

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
                    <button id='BTN_Exit' onClick={Exit} >Sim</button>
                    <button id='BTN_Exit' onClick={No_Exit} >Não</button>
                </div>

            </div>
                
        </div>
    );
}
export default Exit;