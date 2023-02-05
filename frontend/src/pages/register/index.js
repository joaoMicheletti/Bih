import React, {useState} from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import './style_register.css';
import Logo from '../assets/Logo.jpg';
import Bolo from '../assets/bolinho1.png';
import api from '../../services/api';

function Register(){
    const VM = '< VM_Software />';
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
        console.log(Phone.length)

        if(Data.Phone === ''){
            document.querySelector('#Result').innerHTML = 'Preencha o campo Celular!';
        
        } else if(Phone.length > 11){
            document.querySelector("#Result").innerHTML = "Número de Telefone Invalido";
            console.log('> 11')
        } else if(Phone.length < 11) {
            document.querySelector("#Result").innerHTML = "Número de Telefone Invlido";
            console.log('< 11');
        }else if(Data.Pass === ''){
            document.querySelector('#Result').innerHTML = 'Preencha o campo Senha!';

        } else if(Data.Cpass === '') {
            document.querySelector('#Result').innerHTML = 'preencha o campo Confirmar!';

        } else if(Data.Pass === Data.Cpass) {
            const response = await api.post('create_user', Data);
            console.log(response);
                        
            if (response.data === 'Número já cadastrado!!!'){
                alert('Número já cadastrado!!!');
                history('/register');
            } else {
                alert('Usuario cadastrado!');
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
                Celular : <input type='number' 
                className='Phone'
                placeholder='Celular EX: 119322235' 
                name="Phone" 
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)} />

                Senha : <input type={'password'} 
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

export default Register;
