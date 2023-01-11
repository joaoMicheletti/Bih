import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Carrinho(){
    const URL = 'http://localhost:3001/files/';
    const [Today, setToday] = useState([]);
    const User = localStorage.getItem('user');
    const OBJ = {
        User
    };
    
    useEffect(() => { // chamando os pedidos da categoria Doce;
        Api.post('/carrinho_index_d', OBJ)
        .then((Response) => {
            setToday(Response.data);
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

    console.log(Today_S);

    

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to='/loja'>Doces</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/exit'><ImExit/></Link>
                </nav>
            </header>

            <div id='Carrinho_Container'>
                <h3>Doces</h3>
                <div id='Pedidos_hoje'>

                    {Today.map((iten, key) => {
                        const Comprar = async () => {
                            console.log('Comprar.');
                             // Dados para  verificados para cobrr a tacha de entrega,
                            // e si atendemos essa região
                            // após a validação envir o pedido para ser preparado!... 
                            var NameC = prompt("Quao o nome de quem vai receber o pedido!");
                            while (NameC === ''){
                                NameC = prompt("Qual o nome de quem vai receber opedido ? : ");
                            };
                            var Rua = prompt("Digite o nome da Rua :" );
                            while(Rua === '') {
                                Rua = prompt("Digite o nome da rua : ");
                            };
                            var Casa = prompt('Digite o número da residencia :');
                            while(Casa === '') {
                                Casa = prompt('Digite o número da residenci :')
                            };
                            var Cep = prompt('Digite o CEP :');
                            while (Cep.length < 8){
                                Cep = prompt('Digite um CEP Valido:');
                            };
                            while (Cep.length > 8 ){
                                Cep = prompt('Digite um CEP Valido!');
                            };
                            var Troco = prompt('troco pra quanto ?');
                            while (Troco === ''){
                                Troco = prompt('Qual a forma de pagamento [Pix | Cartão | Dinheiro]');
                            }
                            const Iduser = localStorage.getItem('user');
                            let Name = iten.name;
                            let Quantidade = iten.quantidade;
                            let Preço = iten.preço;
                            let Status = 'cozinha';
                            const Data = {
                                NameC,
                                Iduser,
                                Rua,
                                Casa,
                                Cep,
                                Name,
                                Quantidade,
                                Preço,
                                Troco,
                                Status,
                            };
                            console.log(Data);

                            const response = await Api.post('/carrinho_pedido', Data);
                            console.log(response.data);
                            alert('O número do seu pedido é {'+ iten.id+'} consulte o estatus dele pelos canas de cominicação...');
                            
                            let Id = iten.id;
                            const UP = {
                                Id
                            }
                            const resp_update = await Api.put('/carrinho_upload',  UP)
                            console.log(resp_update.data);

                            const Estoque = iten.estoque;
                            const Decrement_estoque = parseInt(iten.estoque, 10) - parseInt(iten.quantidade);
                            const up_doce = {
                                Name,
                                Estoque,
                                Decrement_estoque
                            };
                            const Up_Estoque_Doce = await Api.put('/estoque_d', up_doce);
                            console.log(Up_Estoque_Doce);
                            document.location.reload(true);
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
                                    <p>Preço : {iten.preço}R$</p><br/>
                                    <p>frete : 10,00R$</p><br/>
                                    <p>TOTAL: {parseInt(iten.preço, 10) * parseInt(iten.quantidade, 10) + 10 },00R$</p><br/>
                                    <button onClick={Comprar} id='BTN_Carrinho' >Comprar</button>
                                    <button onClick={Cancelar} id='BTN_Carrinho' >Cancelar</button>
                                    
                                </li>
                            </ul>

                        );

                    })}


                </div>
                <hr/><br/>
                <h3>Salgados</h3>
                <div id='Pedidos_hoje'>
                    {Today_S.map((iten, key) => {
                            const Comprar = async () => {
                                console.log('Comprar.');
                                // Dados para  verificados para cobrr a tacha de entrega,
                                // e si atendemos essa região
                                // após a validação envir o pedido para ser preparado!... 
                                var NameC = prompt("Quao o nome de quem vai receber o pedido!");
                                while (NameC === ''){
                                    NameC = prompt("Qual o nome de quem vai receber opedido ? : ");
                                };
                                var Rua = prompt("Digite o nome da Rua :" );
                                while(Rua === '') {
                                    Rua = prompt("Digite o nome da rua : ");
                                };
                                var Casa = prompt('Digite o número da residencia :');
                                while(Casa === '') {
                                    Casa = prompt('Digite o número da residenci :')
                                };
                                var Cep = prompt('Digite o CEP :');
                                while (Cep.length < 8){
                                    Cep = prompt('Digite um CEP Valido:');
                                };
                                while (Cep.length > 8 ){
                                    Cep = prompt('Digite um CEP Valido!');
                                };
                                var Troco = prompt('troco pra quanto ?');
                                while (Troco === ''){
                                    Troco = prompt('Qual a forma de pagamento [Pix | Cartão | Dinheiro]');
                                }
                                const Iduser = localStorage.getItem('user');
                                let Name = iten.name;
                                let Quantidade = iten.quantidade;
                                let Preço = iten.preço;
                                let Status = 'cozinha';
                                const Data = {
                                    NameC,
                                    Iduser,
                                    Rua,
                                    Casa,
                                    Cep,
                                    Name,
                                    Quantidade,
                                    Preço,
                                    Troco,
                                    Status,
                                };
                                console.log(Data);

                                const response = await Api.post('/carrinho_pedido', Data)
                                console.log(response.data);
                                alert('O número do seu pedido é {'+ iten.id+'} consulte o estatus dele pelos canas de cominicação...');
                                
                                let Id = iten.id;
                                const UP = {
                                    Id
                                }
                                const resp_update = await Api.put('/carrinho_upload_s',  UP)
                                console.log(resp_update.data);

                                const Estoque = iten.estoque;

                                const Decrement_estoque = parseInt(iten.estoque, 10) - parseInt(iten.quantidade);
                                const up_doce = {
                                    Name,
                                    Estoque,
                                    Decrement_estoque
                                };
                                const Up_Estoque_Doce = await Api.put('/estoque_s', up_doce);
                                console.log(Up_Estoque_Doce);
                                document.location.reload(true);
                        
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
                                        <p>Preço : {iten.preço}R$</p><br/>
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
                        <BsWhatsapp/> <a target='blank' href='https://api.whatsapp.com/send?phone=5511992650095'> Whatsapp</a><br/>
                        
                    </div>
                </div>
            </footer>

                
        </div>
    );
}
export default Carrinho;