import React,  {useState, useEffect} from 'react';
import './style_login.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import Api from '../../services/api';

function Painel_d(){

    const [itens, setItens] = useState([]);
    useEffect(() => {
        Api.get('/index_prop')
        .then((Response) => {
            setItens(Response.data);
        })
        .catch(() => {
            console.log('erro')
        })
    }, []);

    const [Doces, setDoces] = useState([]);
    useEffect(() => {
        Api.get('/index_doces')
        .then((Response_Doces) => {
            setDoces(Response_Doces.data);            
        }).catch(() => {
            console.log('Erro');
        })
    }, []);

    return(

        <div className='Painel_s_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt='Logo'/>
                <nav className='Menu'>
                    <Link to='/p_salgados'>P_Salgados  </Link>
                    <Link to='/p_cadastro_itens'>Cadastrar  </Link>
                    <Link to=''>Log_out</Link> 
                </nav>
            </header>

            <div className='Prop_Loja'>
                        <div className='Propaganda'>
                            {itens.map((iten, key) =>{
                            const url = 'http://localhost:3001/files/';
                            
                                                
                        
                            return(
                                <ul id="Ul_prop" key={iten.id}>
                                    <div className='Txt_Propaganda'>
                                        <p>{iten.Texto}</p>
                                    </div>
                                    <div className='Img_Propaganda'>
                                        <img id="IMG_Prop" src={url + iten.img_propaganda} alt={iten.img_propaganda}/>
                                    </div>
                                </ul>
                                )})}
                        </div>
                    </div>

            <div className='Itens_Loja'>
                {Doces.map((iten, key) => {
                    const url = 'http://localhost:3001/files/';
                    return(
                        <ul key={iten.id}>
                            <li>
                                <img src={url + iten.img_doce} alt='logo'/>
                                <br/>
                                <p>Produto: {iten.name}</p>
                                <br/>
                                <p>Description: {iten.description}</p>
                                <br/>
                                <p>Preço: {iten.preço}R$</p>
                                <br/>
                                <p>Status: {iten.status}</p>
                                <br/>
                                <div className='Loja_btn'>
                                    <button>Editar</button>
                                </div>
                            </li>
                        </ul>
                    );
                })}
                
            </div>
        </div>
    );
}
export default Painel_d;