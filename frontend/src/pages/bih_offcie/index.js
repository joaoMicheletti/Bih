import React, {useState} from 'react';
import  {useNavigate} from 'react-router-dom';
import api from '../../services/api';

import './style_login.css';
import Logo from '../assets/Logo.jpg';

function Login(){
    const history = useNavigate();
    const [User, setUser] = useState('');
    const [Pass, setPass] = useState('');
    const Logar = async (e) => {
        e.preventDefault();
                
        const Data = {
            User,
            Pass
        }
        if(Data.Pass === '' || Data.Phone === '') {
            document.querySelector('.Erro').innerHTML = 'ERROR: Preencha os campos a baixo!';

        } else {
            try {
                const response = await api.post('/adm_log_login', Data);
                alert(response.data);
                if (response.data === 'erro no login'){
                    alert('if');
                } else {
                    localStorage.setItem('adm', response.data);
                    alert('else');
                    history('/p_salgados');
                }


            } catch (err){
                console.log('erro catch'); 
            }
        }
    }
    
    return(
        <div className='Form_Container' >
            <h1>Adiministrador</h1>
            <h3 className='Erro'></h3>
            
            <div className='Conteudo_form'>
                
                <img clasName='Logo' src={Logo} alt='Logo'/>

                <form  className='Form' onSubmit={Logar}>
                <label>USER:</label>
                <input type={'text'} className='Phone'
                placeholder='Celular EX: 119322235' 
                name='Phone' 
                onChange={(e) => setUser(e.target.value)}/>

                <label>PassWord:</label>
                <input type={'password'} className='Senha' 
                placeholder='Senha' 
                name='Pass' 
                onChange={(e) => setPass(e.target.value)} />


                <button type='submit' className='Btn_Form'>Login</button>
             </form>

            </div>                 
                               
        </div>
    );
    
}
export default Login;