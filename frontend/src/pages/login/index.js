import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './style_login.css';
import Logo from '../assets/Logo.jpg';
import Bolo from '../assets/bolinho1.png';

function Login(){
    const [Phone, setPhone] = useState('');
    const [Pass, setPass] = useState('');
    const Logar = (e) => {
        e.preventDefault();
        const Data = {
            Phone,
            Pass
        }
        console.log(Data)
    }
    
    return(
        <div className='Form_Container' >
                
            <header className='Navigation'>                    
                <img clasName='Logo' alt='Logo' src={Logo} />
                <nav className='Menu'>
                    <Link to='/'>Home</Link>
                    <Link to='register'>Registrar-se</Link>
                </nav> 
            </header>

            <h1>Login</h1>
    
            <div className='Conteudo_Form'>
                <form  className='Form' onSubmit={Logar}>
                    Celular: <input type={'text'} className='Phone'
                    placeholder='Celular EX: 119322235' 
                    name='Phone' onChange={(e) => setPhone(e.target.value)}/>
                    Senha: <input type={'password'} className='Senha' 
                    placeholder='Senha' 
                    name='Pass' onChange={(e) => setPass(e.target.value)} />
                    <button type='submit' className='Btn_Form'>Login</button>
                </form>
                <img src={Bolo} className='Bolo_Img' alt='img'></img>
            </div>

               
        </div>
    );
    
}
export default Login;