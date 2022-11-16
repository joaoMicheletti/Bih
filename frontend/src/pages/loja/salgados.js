import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import Logo from '../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Salgado(){
    const [Prop, setProp] = useState([]);
    useEffect(() => {
        Api.get('index_prop')
        .then((Response) =>{
            setProp(Response.data);
        }).catch(() => {
            console.log('Erro');
        })
    }, []);
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
                <ul>
                    <li>
                        <img src={Logo} alt='logo'/>
                            <p>Descriptiom : exempolo</p>
                            <p>Preço: $200,00</p>
                        <div className='Loja_btn'>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </li>
                </ul>

                 <ul>
                    <li>
                        <img src={Logo} alt='logo'/>
                        <p>Descriptiom : exempolo</p>
                        <p>Preço: $200,00</p>
                        <div className='Loja_btn'>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </li>
                </ul>

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