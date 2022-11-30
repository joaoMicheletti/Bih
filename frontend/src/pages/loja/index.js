import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Loja(){

    const url = 'http://localhost:3001/files/';
    const [Prop, setProp] = useState([]);
    useEffect(() => {
        Api.get('index_prop')
        .then((Response) => {
            setProp(Response.data);
        }).catch(() => {
            console.log('erro');
        });
    }, []);
    const [Doces, setDoces] = useState([]);
    useEffect(() => {

        Api.get('/index_doces')
        .then((Response_Doces) => {
            setDoces(Response_Doces.data);
        }).catch(() => {
            console.log('Erro');
        });
    },[]);
    
    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/carrinho'><AiOutlineShoppingCart/></Link>
                    <Link to='/exit'><ImExit/></Link>
                </nav>
            </header>

            <div className='Conteudo_Prop'>
                
                    {Prop.map((iten, key) => {
                        
                        return(
                            <div key={iten.id} className='Propaganda'>

                                <div  className='Txt_Propaganda'>
                                    <p>{iten.Texto}</p>
                                    
                                </div>
                                <div className='Img_Propaganda'>
                                    <img src={url + iten.img_propaganda} alt="prop"/>                                
                                </div>
                            </div>

                        )
                    })}
            </div>
            <h3>Doces</h3>
                
            <div className='Itens_Loja'>
                {Doces.map((iten, key) => {
                    const Name = iten.name;
                    const Valor = iten.preço;
                    const Authentication = localStorage.getItem('user');
                    const Data = {
                        Name,
                        Valor,
                        Authentication                          
                    }
                    const Pedido = () => {
                        console.log(Data);
                    }
                    return(
                        <ul key={iten.id}>
                            <li>
                                <img src={url + iten.img_doce} alt='logo'/>
                                <p>produto: {iten.name}</p>
                                <br/>
                                <p>Descrição: {iten.description}</p>
                                <br/>
                                <p>Preço: {iten.preço}R$</p>
                                <br/>
                                <div className='Loja_btn'>
                                    <button onClick={Pedido}>Adicionar ao carrinho</button>
                                </div>
                            </li>
                        </ul> 
                    );
                })}
                
                
            </div>
            
        </div>
    );
}
export default Loja;