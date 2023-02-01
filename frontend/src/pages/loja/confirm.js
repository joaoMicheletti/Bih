import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Api from '../../services/api';
import Logo from '../assets/Logo.jpg';
import './style_loja.css';

function Confirm(){
    const URL = 'http://localhost:3001/files/';
    const History = useNavigate();
    const Prod_id = localStorage.getItem('prod_id');
    const [Pedido_D, setPedido_D] = useState([]);
    const Data_Pedido = {
        Prod_id
    }
    useEffect(() => {
        Api.post('/confirm_doce', Data_Pedido)
        .then((Response) =>{
            setPedido_D(Response.data);

        }).catch(() =>{
            alert('Erro interno');
        })

    }, []);
    console.log(Pedido_D);


    function Cancelar_Pedido(e){
        e.preventDefault();
        localStorage.removeItem('prod_id');
        alert('Pedido cancelado, Você cera direcionado para a home page...');
        History('/');
    }
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

                    {Pedido_D.map((iten, key) => {
                        const Preço = iten.preço;
                        const Quantidade = iten.quantidade;
                        let Valot_T = parseFloat(Preço) * parseInt(Quantidade, 10);

                        return(
                            <ul>
                                <img src={URL + iten.img} alt="Logo"/>
                                <p>{iten.name}</p>
                                <br/>
                                <p>Quantidade: {iten.quantidade} Unidades.</p>
                                <p>Valor dos itens: {Valot_T},00 R$ </p>
                                <hr/>
                            </ul>
                        )
                    })}
                    

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
                        para providenciarmos o seu troco, caso necessário </p>
                        <br/>
                        <p id='Exemplo'>""Exemplo: Dinheiro 150""</p>
                        <br/>
                        
                        <p>Forma de Pagamento</p>
                        <input type='text' placeholder="Cartão, Pix, Dinheiro 150"></input>
                        <br/>
                        <div id="Buttons">
                            <button id="Solicitar" type="submit" >Solicitar Valor do frete</button>
                            <br/>
                            <br/>
                            <div id='Confirmar_Pedido'>
                    
                                <p>Valor Do pedido : xxx</p>
                                <p>Valor do Frete : xxx</p>
                                <p> Valor Total = xxxxxxx</p>
                    
                            </div>
                            <br/>
                            <button id="Confirmar" type="submit" >Confirmar Pedido</button>
                            <br/>
                            <br/>
                            <button id="Cancelar" type='submit'onClick={Cancelar_Pedido} >Cancelar Pedido</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default  Confirm;
