import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Carrinho(){
    
    const History = useNavigate();
    const URL = 'http://localhost:3001/files/';
    const [Today, setToday] = useState([]);
    const User = localStorage.getItem('user');
    const OBJ = {
        User
    };
    console.log(OBJ);
    const VM = '< VM_Software />';
    console.log(Today);
    
    useEffect(() => { // chamando os pedidos da categoria Doce;
        Api.post('/carrinho_index_d', OBJ)
        .then((Response) => {
            setToday(Response.data);
            console.log(Response);
        }).catch(() => {
            if(User === null){
                alert("Acesso restrito");
            } else {
                alert('Erro interno');
            };
        });
    }, []);
    console.log(Today);
    const [Today_S, setToday_S] = useState([]);
    useEffect(() => { // chamando os pedidos  da categoria salgados;
        Api.post('/carrinho_index_s', OBJ)
        .then((Response) => {
            setToday_S(Response.data);            
        }).catch(() => {
            alert('Erro interno');
        });

    }, []);
    

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    
                    <Link to='/loja'>Doces</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/exit'><ImExit/></Link>
                </nav>
            </header>

            <div id='Carrinho_Container'>
                <h3 id='D'>Doces</h3>
                <p id='res_Tt'></p>
                <div id='Pedidos_hoje'>

                    {Today.map((iten, key) => {
                        const Comprar = async () => {
                            const Name_D = iten.name;
                            const Quantidade_D = iten.quantidade;
                            const Itens = {
                                Name_D,
                                Quantidade_D
                            };
                            console.log(Itens)
                            
                            //consulta ao db para ver se ainda temos disponivel no estoque!
                            const Tt = await Api.post('estoque_d', Itens);

                            if (Tt.data === 'Nosso estoque, Não atende essa quantidade!'){
                                document.querySelector('#res_Tt').innerHTML = 'Nosso estoque não possuí mais está quantidade' ;
                                alert('Nosso estoque não possuí mais está quantidade ');
                                
                            } else if(Tt.data === 'ok'){
                                localStorage.setItem('prod_id', iten.id);
                                console.log(localStorage.getItem('prod')+ 'ola');
                                                      
                                //editando adata do iten para que nao sejá mais listado no carrinho
                                let Id = iten.id;
                                const UP = {
                                    Id
                                }
                                const resp_update = await Api.put('/carrinho_upload',  UP)
                                console.log(resp_update.data);
                                History('/confirm');

                            } else {
                                alert('Erro no servidor');
                            };
                        };
                        const Cancelar = async () => {
                            const Id = iten.id;
                            let Name = iten.name;
                            let Quantidade = iten.quantidade;
                            let Preço = iten.preço;

                            const Data = {
                                Id,
                                Name,
                                Quantidade,
                                Preço
                            };
                            console.log(Data);
                            const response = await Api.delete('/carrinho_delete', {data: Data});
                            
                            if (response.data === 'Deleted!'){
                                alert("Deletado do Carrinho...");
                                document.location.reload(true);
                            } else {
                                alert('Algo não saiu como esperado, tente mais tarde!...');
                            }
                        };
                        return(
                            <ul id='Carrinho_Pedido' key={iten.id} >
                                <li>
                                    <img src={URL + iten.img} alt='logo'/>
                                    <p>{iten.name}</p>
                                    <br/>
                                    <p>quantidade : {iten.quantidade}</p><br/>
                                    <p>Preço :  { parseFloat(iten.preço, 10) * parseInt(iten.quantidade, 10)},00R$</p><br/>
                                    <button onClick={Comprar} id='BTN_Carrinho' >Comprar</button>
                                    <button onClick={Cancelar} id='BTN_Carrinho' >Cancelar</button>
                                    
                                </li>
                            </ul>

                        );

                    })}


                </div>
                <hr/><br/>
                <h3>Salgados</h3>
                <p id='res_Tt_salgados'></p>
                <div id='Pedidos_hoje'>
                    {Today_S.map((iten, key) => {
                            const Comprar = async () => {
                                const Namme = iten.name;
                                const Quantt = iten.quantidade;
                                const Iten_name = {
                                    Namme,
                                    Quantt
                                };
                                const Tt = await Api.post('estoque_s', Iten_name);
                                if (Tt.data === 'Nosso estoque, Não atende essa quantidade!'){
                                    document.querySelector('#res_Tt_salgados').innerHTML = 'Nosso estoque, Não atende essa quantidade!';
                                    alert('Nosso estoque, Não atende essa quantidade!');
                                } else if(Tt.data === 'ok'){
                                    localStorage.setItem('prod_id_s', iten.id);
                                    console.log(localStorage.getItem('prod_id_s'));
                                                             
                                    // atualizando a coluna Data para nao indexiar no carrinho
                                    let Id = iten.id;
                                    const UP = {
                                        Id
                                    }
                                    const resp_update = await Api.put('/carrinho_upload_s',  UP)
                                    console.log(resp_update.data);

                                    History('/confirm_s'); 

                                    
                                } else {
                                    alert('Erro no servidor');
                                };
                            };


                            const Cancelar = async () => {
                                const Id = iten.id;
                                let Name = iten.name;
                                let Quantidade = iten.quantidade;
                                let Preço = iten.preço;
                                

                                const Data = {
                                    Id,
                                    Name,
                                    Quantidade,
                                    Preço
                                };
                                console.log(Data);
                                const response = await Api.delete('/carrinho_delete_s', {data: Data});
                                
                                if (response.data === 'Deleted!'){
                                    alert("Deletado do Carrinho...");
                                    document.location.reload(true);
                                } else {
                                    alert('Algo não saiu como esperado, tente mais tarde!...');
                                }
                            };
                            return(
                                <ul id='Carrinho_Pedido' key={iten.id} >
                                    <li>
                                        <img src={URL + iten.img} alt='logo'/>
                                        <p>{iten.name}</p>
                                        <br/>
                                        <p>quantidade : {iten.quantidade}</p><br/>
                                        <p>Preço : {parseFloat(iten.preço, 10) * parseInt(iten.quantidade, 10)},00R$</p><br/>
                                        <button onClick={Comprar} id='BTN_Carrinho' >Comprar</button>
                                        <button onClick={Cancelar} id='BTN_Carrinho' >Cancelar</button>
                                        
                                    </li>
                                </ul>
                            );

                        })}
                        <div id='Result_pedido'>
                    <h3 id='Pedido_number'></h3>
                </div>
                </div>
                
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
                        <BsWhatsapp/> <a target='blank' href='https://api.whatsapp.com/send?phone=5511932223533'>{VM}</a><br/>
                        
                    </div>
                </div>
            </footer>

                
        </div>
    );
}
export default Carrinho;