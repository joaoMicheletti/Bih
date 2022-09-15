import React from 'react';
import {Link} from 'react-router-dom';
import './style_login.css';

function Pedidos(){
    const pedido = 30;
    return(
        <div className="Pedidos_Container">
            <header id='Cabeçalho'>

                <nav id='Menu'>
                    <Link id='Lk' to="p_salgados">Painel_Salgados : </Link>
                    <Link id='Lk' to="p_produtos">Painel_Produtos : </Link>
                    <Link id='Lk' to="">EXIT</Link>
                </nav>
            </header>
            <div id="Pedidos_Container">
                
                <div id="Pedidos_Recebidos">
                    <h2>Recebidos</h2>
                    <ul>
                        <li>
                            <br/><p>Numero do pedido:</p><br/>
                            <p>Produtos:</p><br/>
                            <p>{pedido}</p><br/>
                            <p>Valor:#</p><br/>
                            <p>forma de pagamento /"troco"</p><br/>
                            <p>endereço:#</p><br/>
                            <p>nome cliente:#</p><br/>
                            <button>Enviar</button>
                        </li>
                    </ul>
                </div>

                <div id="Pedidos_Enviados">
                    <h2>Enviados</h2>
                    <ul>
                        <li>
                            <br/><p>Numero do pedido</p><br/>
                            <p>Produtos:#</p><br/>
                            <p>Valor:#</p><br/>
                            <p>forma de pagamento /"troco"</p><br/>
                            <p>endereço:#</p><br/>
                            <p>nome cliente:#</p><br/>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );

}
export default Pedidos;