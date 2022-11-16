import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Salgado(){
    const [Prop, setProp] = useState([]);
    useEffect(() => {
        Api.get('index_prop')
        .then((Response_Prop) =>{
            setProp(Response_Prop.data);
        }).catch(() => {
            console.log('Erro');
        })
    }, []);
    const [Salgados, setSalgados] = useState([]);
    useEffect(() => {
        Api.get('/index_salgados')
        .then((Response_Salgados) => {
            setSalgados(Response_Salgados.data);
            console.log(Response_Salgados.data);
        }).catch(() => {
            console.log('Erro');
        })
    },[]);
    return(

        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/">Home</Link>
                    <Link  to="/loja">Doces</Link>
                </nav>
            </header>
        
            <div className='Prop_Loja'>
                {Prop.map((iten, key) => {
                    const url = 'http://localhost:3001/files/';
                    return(
                        <div className='Propaganda'>

                            <div  key={iten.id} className='Txt_Propaganda'>

                                <p>{iten.Texto}</p>

                            </div>

                            <div className='Img_Propaganda'>
                                <img src={url + iten.img_propaganda} alt="prop"/>
                            </div>
                        </div>

                    )

                })}
                

            </div>
            
            <h3><br/>Salgados</h3>
            <div className='Itens_Loja'>
                    {Salgados.map((iten, key) => {
                        const url = 'http://localhost:3001/files/';
                        return(
                            <ul  key={iten.id}>                                
                                <li>
                                    <img src={url + iten.img_salgado} alt='logo'/>
                                    <br/>
                                    <p>Produto: {iten.name}</p>
                                    <br/>
                                    <p>Descrição: {iten.description}</p>
                                    <br/>
                                    <p>Preço: {iten.preço}R$</p>
                                    <br/>
                                    <div className='Loja_btn'>
                                        <button>+</button>
                                        <button>-</button>
                                    </div>
                                </li>
                            </ul>
                        );
                    })}
                    

                 <div className='pedido'>
                    <label>Valor de pedido:</label>
                    <p>200,00</p>
                    <button type='button'>finalizar</button>
                </div>     
            </div>
        </div>
    );
}
export default Salgado;