import React,  {useState, useEffect} from 'react';
import './style_login.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import Api from '../../services/api';

function Painel_d(){
    // url das imagems
    const url = 'http://localhost:3001/files/';

    const [itens, setItens] = useState([]);
    useEffect(() => {
        Api.get('/index_prop')
        .then((Response) => {
            setItens(Response.data);
        })
        .catch(() => {
    
        })
    }, []);

    const [Doces, setDoces] = useState([]);
    useEffect(() => {
        Api.get('/index_doces_adm')
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
                    <Link to='/p_salgados'>Painel_Salgados  </Link>
                    <Link to='/p_cadastro_itens'>Cadastrar  </Link>
                    <Link id='LK' to="/pedidos">Pedidos_Enviados</Link>
                </nav>
            </header>

            <div className='Prop_Loja'>
                        <div className='Propaganda'>
                            {itens.map((iten, key) =>{
                            
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
                    

                    const Update_Doces = async () => {

                        const Authentication = localStorage.getItem('adm');

                                if(Authentication === null) {
                                    alert('Action not permited');
                                } else {
                                    
                                    const Authentication = localStorage.getItem('adm');
                                    const id = iten.id;
                                    const Description = window.prompt("Nova Descrição do produto: ...");
                                    const Preço = window.prompt("Novo Preço do produto: ...");
                                    const Estoque = window.prompt("Quantidade no Estoque:...");                     
                                    const Status = window.prompt("Novo Status do Produto = [ON / OFF]");
                                    

                                    const Data = {
                                        id,
                                        Description,
                                        Preço,
                                        Estoque,
                                        Status,
                                        Authentication
                                    };
                                    console.log(Data);

                                    const response = await Api.put('/update_product_d', Data)

                                    if ( response.data === 'Iten atualizado com Sucesso!'){
                                        alert(response.data);
                                        document.location.reload(true);

                                    }else {
                                        alert('Algo deu errado, tente mais tarde!!! ... ');

                                    };
                                };

                    };
                    return(
                        <ul key={iten.id}>
                            <li>
                                <img src={url + iten.img_doce} alt='logo'/>
                                <br/>
                                <p>Produto: {iten.name}</p>
                                <br/>
                                <p>Description: {iten.description}</p>
                                <br/>
                                <p>Preço: {iten.preço} R$</p>
                                <br/>
                                <p>Estoque: {iten.estoque} unidades</p>
                                <br/>
                                <p>Status: {iten.status}</p>
                                <br/>
                                <div className='Loja_btn'>
                                    <button onClick={Update_Doces}>Editar</button>
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