import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Loja(){
    const VM = '< VM_Software />';
    const hystory = useNavigate();
    const [Quantidade, setQuantidade] = useState('');
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

                                <div className='Img_Propaganda'>
                                    <img src={url + iten.img_propaganda} alt="prop"/>                                
                                </div>

                                <div  className='Txt_Propaganda'>
                                    <p>{iten.Texto}</p>
                                    
                                </div>
                            </div>

                        )
                    })}
            </div>
            <h3>Doces</h3>

            <p id='Estoque_alert'></p>
                
            <div className='Itens_Loja'>
                {Doces.map((iten, key) => {
                    //gambiarra da data
                    const data = new Date();
                    const Dia = data.getDate();
                    const Mes = data.getMonth() + 1;
                    const Ano = data.getFullYear();
                    const Full_date = Dia+'/'+Mes+'/'+Ano;

                    const Name = iten.name;
                    const Preço = iten.preço;
                    const User = localStorage.getItem('user');
                    const Img = iten.img_doce;
                    const Status_Iten = 'carrinho';
                    const Estoque = iten.estoque
                    const id = iten.id;
                    const Data = {
                        Name,
                        Preço,
                        User,
                        Quantidade,
                        Img,
                        Estoque,
                        Full_date,
                        Status_Iten,
                        id,
                    };
                    
                    const Pedido = async () => {
                        console.log(Quantidade);
                        console.log(Data);
                                        
                        if (User === null){
                            alert("Cadastre-se ou faça login para efetuar pedidos");
                            hystory('/login');
                        } else if(Quantidade === ''){
                            alert('Defina a quantidade!');

                        } else if(Quantidade > parseInt(iten.estoque, 10)) {
                            document.querySelector('#Estoque_alert').innerHTML = 'Quantidade superior a do estoque!';
                        } else {
                            const response = await Api.post('/carrinho', Data);
                            alert(response.data);
                            // gambiara para zerar o stado da variavel setQuantidade;
                            document.location.reload(true);   
                        };
                        
                        
                    };
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
                                <p>Estoque: {iten.estoque}</p>
                                <br/>
                                <div className='Loja_btn'>
                                    <input id='Quantidade' 
                                    type='number' 
                                    placeholder='Quantidade'
                                    onChange={(e) => setQuantidade(e.target.value)}></input>
                                    <button onClick={Pedido}>Adicionar ao carrinho</button>
                                </div>
                            </li>
                        </ul> 
                    )
                })}   
            </div>

            <footer>
                <div id='Footer'>
                    <div id='Social_midias'>
                        <p>Contato</p>
                        <BsInstagram/> <a target='_blank' href='https://instagram.com/cantinhodabi_?igshid=YmMyMTA2M2Y='>Instagram</a><br/>
                        <BsWhatsapp/> <a target='blank' href='https://api.whatsapp.com/send?phone=5511992650095'> Whatsapp</a><br/>
                        <BsFacebook/> <a target='_black' href='https://web.facebook.com/profile.php?id=100063733983690'>Facebook</a>

                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div id='Horarios'>
                        <h4>Funcionamento</h4>
                        <p>Segunda-feira : 08:00 as 17:00</p>
                        <p>Terça-feira : 08:00 as 17:00</p>
                        <p>Quarta-feira : 08:00 as 17:00</p>
                        <p>Quinta-feira : 08:00 as 17:00</p>
                        <p>Sexta-feira : 08:00 as 17:00</p>
            
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div id='Dev'>
                    <p>Develope By</p>
                        <BsWhatsapp/> <a target='blank' href='https://api.whatsapp.com/send?phone=5511932223533'> {VM}</a><br/>
                        
                    </div>
                </div>
            </footer>
            
        </div>
    );
}
export default Loja;