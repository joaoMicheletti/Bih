import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
import Api from '../../services/api';

function Carrinho(){
    const URL = 'http://localhost:3001/files/';
    const [Today, setToday] = useState([]); 
    
    useEffect(() => {
        Api.get('/carrinho_index_d')
        .then((Response) => {
            setToday(Response.data);
        }).catch(() => {
            console.log('erro');
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
                <h3>Adicionados Hoje</h3>
                <div id='Pedidos_hoje'>

                    {Today.map((iten, key) => {
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
                            console.log('Cancelar!!!!');
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
                                    <button onClick={Comprar} id='BTN_Carrinho' >Comprar</button>
                                    <button onClick={Cancelar} id='BTN_Carrinho' >Cancelar</button>
                                    
                                </li>
                            </ul>
                        );

                    })}
                    
                </div>
                <hr/><br/>
            </div>
                
        </div>
    );
}
export default Carrinho;