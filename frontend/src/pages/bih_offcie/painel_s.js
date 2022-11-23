import React, {useState, useEffect} from 'react';
import './style_login.css';
import {Link, Navigate} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import Api from '../../services/api';

function Painel_s(){

    const [itens, setItens] = useState([]);
    const [Salgado, setSalgado] = useState([]);
    useEffect(() => {
        Api.get('/index_prop')
        .then((Response) => {
            setItens(Response.data)
                    
        })
        .catch(() => {
            console.log('erro')
        });
        

    }, []);

    useEffect(() => {
        Api.get('/index_salgados')
        .then((Salgado) => {
            setSalgado(Salgado.data);
                    
        })
        .catch(() => {
            console.log('erro')
        });
        

    }, []);
    const url = 'http://localhost:3001/files/';

    return(
        <div className="Painel_s_Container">
            
            <header className='Cabeçalho'>
                    <img className='Logo' id="Logo" src={Logo} alt="Logo"/>
                    <nav className='Menu'>
                        <Link to='/p_doces'>P_Doces  </Link>
                        <Link  to="/p_cadastro_itens">Cadastrar  </Link>
                        <Link to='/pedidos'>Pedidos</Link> 
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
                        {Salgado.map((iten, key) => {

                            const Update_iten = async () => {

                                const Authentication = localStorage.getItem('adm');

                                if(Authentication === null) {
                                    alert('Voê nao te, altorização pra fazer isso!');
                                } else {

                                    const id = iten.id;
                                    const Name = window.prompt("Novo nome para o produto...");
                                    const Description = window.prompt('Nova Descrição do Produto...');
                                    const Preço = window.prompt("Novo preço para o produto...");
                                    const Status = window.prompt("Status do produto [ON / OFF]...");
                                    
                                
                                    
                                    const Data = {
                                        id,
                                        Name,
                                        Description, 
                                        Preço,
                                        Status,
                                        Authentication
                                    };
                                    const response = await Api.put('/update_product_s', Data);
                                    try{
                                        console.log(response);
                                        alert(response.data);
                                        Navigate('/p_salgados');

                                    } catch(err) {

                                    };

                                    }
                                
                        };

                            return(
                                <ul key={iten.id} id='itens'>
                                    <li>
                                        <img src={url + iten.img_salgado} alt='logo'/>
                                        <p>Produto: {iten.name}</p>
                                        <br/>
                                        <p>{iten.description}</p>
                                        <br/>
                                        <p>Preço: {iten.preço} R$</p>
                                        <br/>
                                        <p>Status: {iten.status}</p>
                                        <div className='Loja_btn'>
                                        <button onClick={Update_iten}>Editar</button>
                                        </div>
                                    </li>
                                </ul>
                            );
                        })}
                        
                    </div>    
        </div>
    );
}
export default Painel_s;