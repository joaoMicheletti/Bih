import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Carrinho(){
    //const url = 'http://localhost:3001/files/';
    const [Today, setToday] = useState(''); 
    useEffect(() => {
        Api.get('/carrinho_index_d')
        .then((Response) => {
            setToday(Response.data);
            console.log(Response);
        }).catch(() => {
            console.log('Erro');
        })

    }, []);

    const Enviar = async () => {
        console.log('Enviar');
    };
    const Cancelar = async () => {
        console.log('Cancelar');
    };

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to='/loja'>Doces</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/exit'><ImExit/></Link>
                </nav>
            </header>

            <div id='Carrinho_Container'>
                <div id='Pedidos_hoje'>
                    <h3>Adicionados Hoje</h3>
                    <ul>
                        <li>
                            <img src={Logo} alt='logo'/>
                            <p>Name:</p>
                            <p>Description:</p>
                            <p>Quantidade:</p>
                            <p>Preço:</p>
                            <button onClick={Enviar} >Comprar</button>
                            <button onClick={Cancelar}>Cancelar</button>

                        </li>
                    </ul>
                </div>
                <hr/>
                <div id='Pedidos_Finalizados'>
                    <h3>Pedidos finalizados</h3>
                </div>
            </div>
                
        </div>
    );
}
export default Carrinho;