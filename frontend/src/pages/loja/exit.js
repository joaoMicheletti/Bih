import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import Logo from '../loja/../assets/Logo.jpg';
import './style_loja.css';
//import Api from '../../services/api';

function Exit(){
    
    const VM = '< VM_Software />';
    const History = useNavigate();
    const Exit = () => {
        localStorage.removeItem('user');
        console.log('exit');
        History('/');
    };
    const No_Exit = () => {
        console.log('no exit');
        History('/loja');
    };

    return(
        <div className='Loja_Container'>
            <header className='Cabeçalho'>
                <img className='Logo' src={Logo} alt="Logo"/>
                <nav className='Menu'>
                    <Link  to="/" >Home</Link>
                    <Link to="/salgados">Salgados</Link>
                    <Link to='/carrinho'><AiOutlineShoppingCart/></Link>
                </nav>
            </header>

            <div id='Exit_Container'>
                <h2>Tem certeza que gostaria de sair .</h2>
                
                <div id='Button_Container'>
                    <button id='BTN_Exit' onClick={Exit} >Sim</button>
                    <button id='BTN_Exit' onClick={No_Exit} >Não</button>
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
export default Exit;