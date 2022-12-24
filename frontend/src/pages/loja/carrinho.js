import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
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
                            var Name_C = prompt("Quao o nome de quem vai receber o pedido!");
                            while (Name_C === ''){
                                Name_C = prompt("Qual o nome de quem vai receber opedido ? : ");
                            };
                            var Rua = prompt("Digite o nome da Rua :" );
                            while(Rua === '') {
                                Rua = prompt("Digite o nome da rua : ");
                            };
                            var Casa_n = prompt('Digite o número da residencia :');
                            while(Casa_n === '') {
                                Casa_n = prompt('Digite o número da residenci :')
                            };
                            var Cep = prompt('Digite o CEP :');
                            while (Cep.length < 8){
                                Cep = prompt('Digite um CEP Valido:');
                            };
                            while (Cep.length > 8 ){
                                Cep = prompt('Digite um CEP Valido!');
                            };
                            var troco = prompt('troco pra quanto ?');
                            while (troco === ''){
                                troco = prompt('Qual a forma de pagamento [Pix | Cartão | Dinheiro]');
                            }
                            const Id = localStorage.getItem('user');
                            let Name = iten.name;
                            let Quantidade = iten.quantidade;
                            let Preço = iten.preço;
                            console.log(Cep.length);
                            console.log(Cep);
                            console.log(Casa_n);
                            console.log(Rua);
                            console.log(Name_C);
                            const Data = {
                                Name_C,
                                Id,
                                Rua,
                                Casa_n,
                                Cep,
                                
                                Name,
                                Quantidade,
                                Preço,
                                troco
                            };
                            console.log(Data);

                            const response = await Api.post('/carrinho_pedido', Data)
                            console.log(response.data);

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
                                    <p>TOTAL: {parseInt(iten.preço) * parseInt(iten.quantidade) + 10 },00R$</p><br/>
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
                                var Nome_C = prompt("Quao o nome de quem vai receber o pedido!");
                                while (Nome_C === ''){
                                    Nome_C = prompt("Qual o nome de quem vai receber opedido ? : ");
                                };
                                var Rua = prompt("Digite o nome da Rua :" );
                                while(Rua === '') {
                                    Rua = prompt("Digite o nome da rua : ");
                                };
                                var Numnero = prompt('Digite o número da residencia :');
                                while(Numnero === '') {
                                    Numnero = prompt('Digite o número da residenci :')
                                };
                                var Cep = prompt('Digite o CEP :');
                                while (Cep.length < 8){
                                    Cep = prompt('Digite um CEP Valido:');
                                };
                                while (Cep.length > 8 ){
                                    Cep = prompt('Digite um CEP Valido!');
                                };


                                console.log(Cep.length);
                                console.log(Cep);
                                console.log(Numnero);
                                console.log(Rua);
                                console.log(Nome_C);
                                const Data = {
                                    Cep,
                                    Nome_C,
                                    Rua,
                                    Numnero
                                };
                                console.log(Data);
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
                </div>
                
            </div>
                
        </div>
    );
}
export default Carrinho;