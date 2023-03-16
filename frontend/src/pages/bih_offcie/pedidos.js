import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Api from '../../services/api';
import './style_login.css';

function Pedidos(){
    const [Cozinha, setCozinha] = useState([]);
    const [Vendidos, setVendidos] = useState([]);
    //const [Drive, setDrive] = useState([]);
    useEffect(() => { // chamando os pedidos da categoria Doce;
        Api.get('/pedidos')
        .then((Response) => {
            setCozinha(Response.data);
            console.log(Cozinha);
        }).catch(() => {
            alert('erro');            
        });
    }, []);

    useEffect(() => { // chamando os pedidos da categoria Doce;
        Api.get('/pedidos_vendidos')
        .then((Response) => {
            setVendidos(Response.data);
            console.log(Cozinha);
        }).catch(() => {
            alert('erro');            
        });
    }, []);
    console.log(Cozinha);

    return(
        <div className="Pedidos_Container">
            <header id='Cabeçalho'>

                <nav id='Menu'>
                    <Link id='Lk' to="/p_salgados">Painel_Salgados : </Link>
                    <Link id='LK' to="/p_cadastro_itens">Cadastrar</Link>
                    <Link id='Lk' to="/p_doces">Painel_Doces : </Link>
                </nav>
            </header>
            <div id="Pedidos_Container">
                
                <div id="Pedidos_Recebidos">
                    <h2>#Recebidos</h2>
                    {Cozinha.map((iten, key) => {
                        const Upload = async () =>{
                            const ID = iten.id;
                            const Data = {
                                ID,
                            };
                            const response = Api.put('/pedidos_upload', {data:Data})
                            alert('pedido sendo enviado!');
                            document.location.reload(true);
                            console.log(response);
                        }
                        const number = iten.iduser;
                        const URL = 'https://api.whatsapp.com/send?phone=' + number;
                        return(
                            <ul key={iten.id}>
                                <li>
                                    <br/><p>Pedido : {iten.np}</p><br/>
                                    <p>Produtos: {iten.name_p}</p><br/>
                                    <p>Quantidade: {iten.quantidade} </p><br/>
                                    <p>Valor: {parseInt(iten.preço, 10) * parseInt(iten.quantidade, 10) },00 R$</p><br/>
                                    <p>Troco para/ : {iten.troco}R$</p><br/>
                                    <p>nome cliente: {iten.namec}</p><br/>
                                    <p>ENDEREÇO</p><br/>
                                    <p>CEP: {iten.cep}</p><br/>
                                    <p>Rua : {iten.rua}</p><br/>
                                    <br/>
                                    <a target='_blank' id='WP_USER'  href={URL}>Whatsapp</a>
                                    <br/>
                                    <br/>
                                    <button id='BTN' onClick={Upload}>Enviar</button>
                                    
                                </li>
                            </ul>
                        );
                    })}
                    
                </div>

                <div id="Pedidos_Enviados">
                    <h2>#Enviados</h2>
                    {Vendidos.map((iten, key) => {
                        
                        const number = iten.iduser;
                        const URL = 'https://api.whatsapp.com/send?phone=' + number;
                        return(
                            <ul key={iten.id}>
                                <li>
                                    <br/><p>Número do Pedido : {iten.np}</p><br/>
                                    
                                    <p>Produtos: {iten.name_p}</p><br/>
                                    <p>Quantidade: {iten.quantidade} </p><br/>
                                    <p>Valor: {parseInt(iten.preço, 10) * parseInt(iten.quantidade, 10)},00 R$</p><br/>
                                    <p>Troco para/ : {iten.troco}R$</p><br/>
                                    <p>nome cliente: {iten.namec}</p><br/>
                                    <p>ENDEREÇO</p><br/>
                                    <p>CEP: {iten.cep}</p><br/>
                                    <p>Rua : {iten.rua}</p><br/>
                                    <a target='_blank' id='WP_USER'  href={URL}>Whatsapp</a>
                                    <br/>
                                    <br/>
                                    
                                </li>
                            </ul>
                        );
                    })}
                </div>

            </div>
        </div>
    );

}
export default Pedidos;