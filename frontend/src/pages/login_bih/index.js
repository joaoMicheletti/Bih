import React from 'react';
import Logo from '../assets/Logo.jpg';
import {Link} from 'react-router-dom';
import './style_login.css';
import Bolo from '../assets/bolinho1.png';

function Login_Bih(){
    return(
        <div className='Form_Container' >
                
            <header className='Navigation'>                    
                <img clasName='Logo' alt='Logo' src={Logo} />
                <nav className='Menu'>
                    <a className='A' ><Link to='/'>Home</Link></a>
                    <a className='A'> <Link to='register'>Registrar-se</Link></a>
                </nav> 
            </header>

            <h1>Login_Offcie</h1>
            <h3></h3>

            <div className='Conteudo_Form'>
                <form method='POST' className='Form'>
                    Senha: <input type={'password'} className='Senha' placeholder='Senha' />
                    <a><button type='button' className='Btn_Form'>Login</button></a>
                </form>
                <img src={Bolo} className='Bolo_Img' alt='img'></img>
            </div>
        </div>
    );
}
export default Login_Bih;