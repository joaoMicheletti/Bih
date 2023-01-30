import React, {useState} from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import api from '../../services/api';
import './style_login.css';
import Logo from '../assets/Logo.jpg';
import Bolo from '../assets/bolinho1.png';


function Login(){
    const VM = '< VM_Software />';
    const hystory = useNavigate();
    const [Phone, setPhone] = useState('');
    const [Pass, setPass] = useState('');
    const Logar = async (e) => {
        e.preventDefault();
        const Data = {
            Phone,
            Pass
        };

        if(Phone.length === 0){
            document.querySelector('#response').innerHTML = 'Preencha o campo "CELULAR"';

        } else if (Pass.length === 0){
            document.querySelector('#response').innerHTML = 'Preencha o campo "SENHA"';
        } else {
            try{
            
                const response = await api.post('user_login', Data);
    
                if(response.data !==  'Erro: Falha no Login!'){
                    localStorage.setItem('user', response.data);
                    hystory('/loja');
                } else {
                    alert(response.data);
                    hystory('/login');
                }
    
    
            } catch (err){
                alert('erro');
            };
        };
        
    };

    return(
        <div className='Form_Container' >
                
            <header className='Navigation'>                    
                <img clasName='Logo' alt='Logo' src={Logo} />
                <nav className='Menu'>
                    <Link to='/' onClick={() => Navigate('/')}>Home</Link>
                    <Link to='/register'>Registrar-se</Link>
                    
                </nav> 
            </header>

            <h1>Login</h1>
            <h4 id='response'></h4>
    
            <div id='Conteudo_Form'>
                <form id='Form' className='Form' onSubmit={Logar}>
                    Celular: <input type='number' className='Phone'
                    placeholder='Celular EX: 119322235' 
                    name='Phone' onChange={(e) => setPhone(e.target.value)}/>
                    Senha: <input type={'password'} className='Senha' 
                    placeholder='Senha' 
                    name='Pass' onChange={(e) => setPass(e.target.value)} />
                    <button type='submit' className='Btn_Form'>Login</button>
                </form>
                <div id='Img'>
                    <img src={Bolo} className='Bolo_Img' alt='img'></img>

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

export default Login;