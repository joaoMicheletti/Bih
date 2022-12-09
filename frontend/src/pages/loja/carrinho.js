import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Carrinho(){
    const URL = 'http://localhost:3001/files/';
    const [Today, setToday] = useState([]); 
    
    useEffect(() => {
        Api.get('/carrinho_index_d')
        .then((Response) => {
            setToday(Response.data);
        }).catch(() => {
            console.log('erro');
        });
    }, []);

    const [Finalizados, setFinalizados] = useState([]);
    useEffect(() => {
        Api.get('/carrinho_index_s')
        .then((Response) => {
            setFinalizados(Response.data);
        }).catch(() => {
            console.log('Erro');
        });

    }, []);


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
                <h3>Adicionados Hoje</h3>
                <div id='Pedidos_hoje'>

                    {Today.map((iten, key) => {

                        const Comprar = async () => {
                            console.log('Comprar');
                        };
                        const Cancelar = async () => {
                            console.log('Cancelar');
                        };
                        return(
                            <ul id='Carrinho_Pedido' key={iten.id} >
                                <li>
                                    <img src={URL + iten.img} alt='image produto'/>
                                    <p>{iten.name}</p>
                                    <br/>
                                    <p>quantidade : {iten.quantidade}</p><br/>
                                    <p>Preço : {iten.preço}R$</p><br/>
                                    <button onClick={Comprar} id='BTN_Carrinho' >Comprar</button>
                                    <button onClick={Cancelar} id='BTN_Carrinho' >Cancelar</button>
                                    
                                </li>
                            </ul>
                        );

                    })}
                    
                </div>
                <hr/><br/>
                <br/>
                <div id='Pedidos_Finalizados'>
                    <h3>Pedidos finalizados</h3>
                    <div id='Pedidos_finalizados'>

                    {Finalizados.map((iten, key) => {
                        return(
                            <ul id='Carrinho_Pedido' key={iten.id} >
                                <li>
                                    <img src={URL + iten.img} alt='image produto'/>
                                    <p>{iten.name}</p>
                                    <br/>
                                    <p>quantidade : {iten.quantidade}</p><br/>
                                    <p>{iten.preço}</p><br/>
                                    
                                </li>
                            </ul>
                        );

                    })}
                    </div>
                </div>
            </div>
                
        </div>
    );
}
export default Carrinho;