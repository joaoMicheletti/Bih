import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import './style_loja.css';

function Salgado(){
    return(

        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link onClick={() => Navigate('/')} to="/">Home</Link>
                    <Link  to="loja">Doces</Link>
                </nav>
            </header>
        
            <div className='Prop_Loja'>
                <div className='Propaganda'>
                    <div className='Txt_Propaganda'>
                        <p>texto para a propaganda texto para a propaganda
                            texto para a propaganda texto para a propaganda
                            texto para a propaganda texto para a propaganda
                            texto para a propaganda texto para a propaganda
                        </p>
                    </div>

                    <div className='Img_Propaganda'>
                        <img src={Logo} alt="prop"/>
                    </div>
                </div>

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