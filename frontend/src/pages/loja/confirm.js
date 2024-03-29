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
    };
    useEffect(() => {
        Api.post('/confirm_doce', Data_Pedido)
        .then((Response) =>{
            setPedido_D(Response.data);

        }).catch(() =>{
            alert('Erro interno');
        })

    }, []);
    const [Name, setName] = useState();
    const [Cidade, setCidade] = useState();
    const [Endereco, setEndereco] = useState();
    const [Cep, setCep] = useState();
    const [Tot, setTot] = useState();
    const [Pagamento, setPagamento] = useState();
    
    
    
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
                            <input type='text' 
                            placeholder='Nome do cliente'
                            onChange={(e) => setName(e.target.value)}></input>
                        
                        <br/>
                        <p>Cidade</p>
                        <input type='texte' 
                        placeholder="Cidade"
                        onChange={(e) => setCidade(e.target.value)}></input>
                        
                        <br/>
                        <p>Endereço</p> 
                        <input type='text' 
                        placeholder="João pessoa n- 1533"
                        onChange={(e) => setEndereco(e.target.value)}></input>
                        
                        <br/>
                        <p>Cep</p> 
                        <input type='number' 
                        placeholder="CEP..."
                        onChange={(e) => setCep(e.target.value)}></input>
                        
                        <br/>

                        <div id="Buttons">
                            {Pedido_D.map((elent, keyy) => {
                                

                                const Frete = async (e) => {
                                    e.preventDefault();

                                    if(Name === undefined){
                                        alert('Preencha o campo Nome...')
                                    } else if (Cidade === undefined){
                                        alert('Preencha o campo "Cidade"...');
                                    } else if(Endereco === undefined){
                                        alert('Preencha o campo ""Endereço"...');
                                    } else if(Cep === undefined){
                                        alert('Preencha o campo Cep');
                                    } else if(Cep.length < 8 || Cep.length > 8){
                                        alert('Cep Invalido');
                                    };

                                    const Data = {
                                        Cep,
                                    };
                                    //buscando nobak a distancia em km e atibuindo para cada km o valor de 1,50$;
                                    async function Destance(){
                                        document.querySelector("#Produto").innerHTML = `Aguarde estamos calculano o seu pedido!`;
                                        
                                        const Res = await Api.post("/frete_calc", Data)
                                        .then(Km => {
                                            const frete = parseInt(Km.data, 10);
                                            console.log(frete);
                                            const preco = parseFloat(elent.preço);
                                            const quanti = parseFloat(elent.quantidade);
                                            const Total = (preco * quanti) + frete * 1.50;
                                            setTot(Total);
                                            
                                            document.querySelector("#Produto").innerHTML = `Valor do produto : ${elent.preço}R$`;
                                            document.querySelector("#Quantidadee").innerHTML = `Quantidade = ${elent.quantidade}`;
                                            document.querySelector("#Frete").innerHTML = `Valor do Frete = ${parseFloat(frete * 1.50)} R$ `;
                                            document.querySelector("#Total").innerHTML = `TOTAL ==== ${parseFloat(Total)} R$`;
                                            console.log(Res);
                                        }).catch(err =>{
                                            alert("Erro interno. tente novamente mais tarde!");
                                            document.querySelector("#Produto").innerHTML = `Erro interno. tente novamente mais tarde!!`;
                                            console.log('erro');
                                        })
                                    }                        
                                    
                                    Destance();

                                };
                                function Comprar(e){
                                    e.preventDefault();
                                    console.log(Name);
                                    console.log(Cidade);
                                    if(Name === undefined){
                                        alert('Preencha o campo Nome...')
                                    } else if (Cidade === undefined){
                                        alert('Preencha o campo "Cidade"...');
                                    } else if(Endereco === undefined){
                                        alert('Preencha o campo ""Endereço"...');
                                    } else if(Cep === undefined){
                                        alert('Preencha o campo Cep');
                                    } else if(Cep.length < 8 || Cep.length > 8){
                                        alert('Cep Invalido');
                                    } else if(Pagamento === undefined) {
                                        alert('Preencha o campo Forma de Pagamneto');
                                    };

                                    if(Tot === undefined){
                                        alert('Você só pode confirmar o pedido Apos ele ser calculado...');
                                        document.location.reload(true);
                                    } else {

                                        const Troco = Pagamento;
                                        const Rua = Endereco;
                                        const np = Pedido_D[0].id + "D";
                                        const NameC = Name;
                                        const Iduser = Pedido_D[0].user;
                                        const Preço = Pedido_D[0].preço;
                                        const Quantidade = Pedido_D[0].quantidade;
                                        const Status = 'cozinha';
                                        const Casa = Endereco;
                                        const Name_p = Pedido_D[0].name;

                                        const Cozinha = {
                                            NameC,
                                            Iduser, 
                                            Rua,
                                            Casa,   
                                            Name_p, 
                                            Preço, 
                                            Quantidade, 
                                            Troco,
                                            Status,
                                            np,
                                            Cep,
                                            Cidade,
                                            Tot,
                                        };
                                        console.log(Cozinha);

                                        // enviando pedido para a cozinha
                                        const Pedido_Finalizado = async () => {
                                            const response = await Api.post('/carrinho_pedido', Cozinha)
                                            console.log(response.data);
                                            alert('O número do seu pedido é {'+np+'} consulte o status dele pelos canas de cominicação...');
                                            localStorage.removeItem('prod_id');
                                            History("/");
                                        };
                                        Pedido_Finalizado();

                                        

                                        //decrementando o estoque apos efetuar a compra
                                        const Decrement = async () => {
                                            const Estoque = Pedido_D[0].estoque;
                                            const Name = Pedido_D[0].name;
                                            const Decrement_estoque = parseInt(Pedido_D[0].estoque, 10) - parseInt(Pedido_D[0].quantidade, 10);
                                            const up_doce = {
                                                Name,
                                                Estoque,
                                                Decrement_estoque
                                            };
                                            const Up_Estoque_Doce = await Api.put('/estoque_d', up_doce);
                                            console.log(Up_Estoque_Doce);
                                        };
                                        
                                        Decrement();

                                    };
                                };
                            
                            
                                function Cancelar_Pedido(e){
                                    e.preventDefault();
                                    localStorage.removeItem('prod_id');
                                    alert('Pedido cancelado');
                                    History('/loja');
                                };
                                //função para retirar o pedido na loja,
                                async function Retirada(e){
                                    e.preventDefault();
                                    const Troco = 'retirada';
                                    const Rua = "retirada";
                                    const np = Pedido_D[0].id + "D";
                                    const NameC = Name;
                                    const Iduser = Pedido_D[0].user;
                                    const Preço = Pedido_D[0].preço;
                                    const Quantidade = Pedido_D[0].quantidade;
                                    const Status = 'cozinha';
                                    const Casa = "retirada";
                                    const Name_p = Pedido_D[0].name;
                                    
                                    if (NameC === undefined){
                                        alert('Informe Qual o nome de quem vai retirar o pedido: ');
                                    } else{
                                        
                                        const DataRetirada = {
                                            NameC, //nome do cliente a retiar o pedido !
                                            Iduser, 
                                            Rua,
                                            Casa,   
                                            Name_p, 
                                            Preço, 
                                            Quantidade, 
                                            Troco,
                                            Status,
                                            np,
                                            Cep: "retirada",
                                            Cidade: "retirada",
                                            Tot: "retirada"
                                        };
                                        console.log(DataRetirada);

                                        const response = await Api.post('/carrinho_pedido', DataRetirada)
                                            console.log(response.data);
                                            alert('O número do seu pedido é {'+np+'} consulte o status dele pelos canas de cominicação...');
                                            localStorage.removeItem('prod_id');
                                            History("/");
                                    };
                                    //decrementando o estoque apos efetuar a compra
                                    const Decrement = async () => {
                                        const Estoque = Pedido_D[0].estoque;
                                        const Name = Pedido_D[0].name;
                                        const Decrement_estoque = parseInt(Pedido_D[0].estoque, 10) - parseInt(Pedido_D[0].quantidade, 10);
                                        const up_doce = {
                                            Name,
                                            Estoque,
                                            Decrement_estoque
                                        };
                                        const Up_Estoque_Doce = await Api.put('/estoque_d', up_doce);
                                        console.log(Up_Estoque_Doce);
                                    };
                                    
                                    Decrement();
                                    
                                };

                                return(
                                    <div keyy={elent.id}>
                                    	<button id="Retirada" type="submit" onClick={Retirada} > Solicitar Retirada</button>
                                    	<br/>
                                    	<br/>
                                        <button id="Solicitar" type="submit" onClick={Frete} >Solicitar Valor do frete</button>
                                        <br/>
                                        <br/>
                                        <div id='Confirmar_Pedido'>
                                
                                        <p id="Produto"></p>
                                        <br/>
                                        <p id="Quantidadee"></p>
                                        <br/>
                                        <h4 id="Erro"></h4>
                                        <p id="Frete"></p>
                                        <br/>
                                        <p id="Total" ></p>
                                
                                        </div>
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
                                        <input type='text' 
                                        placeholder="Cartão, Pix, Dinheiro 150"
                                        onChange={(e) => setPagamento(e.target.value)}></input>
                                        <br/>
                                            
                                        <br/>
                                        <button id="Confirmar" type="submit" onClick={Comprar} >Confirmar Pedido</button>
                                        <br/>
                                        <br/>
                                        <button id="Cancelar" type='submit'onClick={Cancelar_Pedido} >Cancelar Pedido</button>
                                        

                                    </div>

                                )
                                    
                            })}

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default  Confirm;
