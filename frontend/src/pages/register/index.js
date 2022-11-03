import React, {useState} from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import './style_register.css';
import Logo from '../assets/Logo.jpg';
import Bolo from '../assets/bolinho1.png';
import api from '../../services/api';

function Register(){
    const history = useNavigate();
    const [Phone, setPhone] = useState('');
    const [Pass, setPass] = useState('');
    const [Cpass, setCpass] = useState('');

    const Registrar = async (e)  => {
        e.preventDefault();
       
        const Data = {
            Phone,
            Pass,
            Cpass
        };

        if(Data.Phone === ''){
            document.querySelector('#Result').innerHTML = 'Preencha o campo Celular!';
        
        } else if(Data.Pass === ''){
            document.querySelector('#Result').innerHTML = 'Preencha o campo Senha!';

        } else if(Data.Cpass === '') {
            document.querySelector('#Result').innerHTML = 'preencha o campo Confirmar!';

        } else if(Data.Pass === Data.Cpass) {
            const response = await api.post('create_user', Data);
            console.log(response);
                        
            if (response.data === 'Número já cadastrado!!!'){
                history('/register');
            } else {
                history('/login')
            };

        } else {
            document.querySelector('#Result').innerHTML = 'As senhas não batem!';
        }
   
        
    };
    return(
        <div className='Form_Container' >
                
        <header className='Navigation'>                    
            <img clasName='Logo' alt='Logo' src={Logo} />
            <nav className='Menu'>
            <Link onClick={() => Navigate('/')} to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            </nav>
        </header> 

       <h1>Registrar-se</h1>
       <p id='Result'></p>
       <div className='Conteudo_Form'>
            <form  className='Form' onSubmit={Registrar}>
                Celular: <input type='number' 
                className='Phone'
                placeholder='Celular EX: 119322235' 
                name="Phone" onChange={(e) => setPhone(e.target.value)} />

                Senha: <input type={'password'} 
                className='Senha' 
                placeholder='Senha'
                name='senha' onChange={(e) => setPass(e.target.value)} />
                Confirmar: <input type={'password'} 
                classNmae='C_Senha' 
                placeholder='Confirmar'
                name='cPass' onChange={(e) => setCpass(e.target.value)} />
                
                <button type='submit' 
                className='Btn_Form'>Registrar-se</button>
            </form>
            <img src={Bolo} className='Bolo_Img' alt='img'></img>
       </div>

       
    </div>
    );

}

export default Register;
