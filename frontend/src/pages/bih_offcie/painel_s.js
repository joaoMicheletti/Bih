import React from "react";
import './style_login.css';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.jpg';

function Painel_s(){
    return(
        <div className="Painel_s_Container">
            
            <header className='Cabeçalho'>
                    <img className='Logo' id="Logo" src={Logo} alt="Logo"/>
                    <nav className='Menu'>
                        <Link to="p_doces">Painel_Doces : </Link>
                        <Link to="p_produtos">Painel_Produtos : </Link>
                        <Link to="">EXIT</Link>
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

                    <div className='Itens_Loja'>
                    <ul>
                        <li>
                            <img src={Logo} alt='logo'/>
                            <p>Produto: ???</p>
                            <p>Description: exempolo</p>
                            <p>Preço: $200,00</p>
                            <p>Status: on / off</p>
                            <div className='Loja_btn'>
                                <button>Editar</button>
                            </div>
                        </li>
                    </ul>
                </div>    
        </div>
    );
}
export default Painel_s;