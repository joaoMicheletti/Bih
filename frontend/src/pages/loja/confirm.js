import React from "react";
import Logo from '../assets/Logo.jpg';
import './style_loja.css';

function Confirm(){
    return(
        <div id="Confirm_Container">
            <header id="Confirm_Header">

                <div id='Logo'>
                    <img src={Logo} alt='Logo_marca'/>
                </div>
                <div id="Menu_Confirm">
                </div>
            </header>

            <div id="Form_Confirm_Container">
                <h1>Finalizar pedido</h1>

                <div id="Pedido_Confirm">
                    <ul>
                        <img src="" alt="Logo"/>
                        <p>Produto: XXXX</p>
                        <p>Description: xxxxx</p>
                        <p>Quantidade: xxxxx</p>
                        <p>preço: xxxxx</p>
                        <hr/>
                    </ul>

                    <form>
                        <p>Nome</p> 
                            <input type='text' placeholder='Nome do cliente'></input>
                        
                        <br/>
                        <p>Cidade</p>
                        <input type='texte' placeholder="Cidade"></input>
                        
                        <br/>
                        <p>Endereço</p> 
                        <input type='text' placeholder="João pessoa n- 1533"></input>
                        
                        <br/>
                        <p>Cep</p> 
                        <input type='number' placeholder="CEP..."></input>
                        
                        <br/>
                        <p id="F_pagamento">Formas de pagamento.</p>
                        <p>Cartão</p>
                        <p>Pix</p>
                        <p>Dinheiro</p>
                        <br/>
                        <p id="Warning">Caso Sejá (Dinheiro) envie-nos o valor que possui em mãos, 
                        ara providenciarmos o seu troco, caso necessário </p>
                        <br/>
                        <p id='Exemplo'>""Exemplo: Dinheiro 150""</p>
                        <br/>
                        
                        <p>Forma de Pagamento</p>
                        <input type='text' placeholder="Cartão, Pix, Dinheiro 150"></input>
                        <br/>
                        <div id="Buttons">
                            <button type="submit" >Solicitar Valor do frete</button>
                            <br/>
                            <br/>
                            <div id='Confirmar_Pedido'>
                    
                                <p>Valor Do pedido : xxx</p>
                                <p>Valor do Frete : xxx</p>
                                <p> Valor Total = xxxxxxx</p>
                    
                            </div>
                            <br/>
                            <button type="submit" >Confirmar Pedido</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default  Confirm;
