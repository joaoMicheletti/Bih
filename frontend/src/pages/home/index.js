import React, {Component} from 'react';
import { Link, navigate } from 'react-router-dom';
import './style_home.css';
import Logo from '../assets/Logo.jpg';

class Home extends Component { 
    render(){
        return(
            <div className='Home_Container' >

                <header className='Navigation'>
                    
                    <img clasName='Logo' alt='Logo' src={Logo} />
 
                    <nav className='Menu'>
                        <Link to='loja' onClick={() => navigate('loja')}>Loja</Link>
                        <Link to='register'>Registrar-se</Link>
                        <Link to='login'>Login</Link>
                    </nav>

                </header>

                <div className='Conteudo'>
                    <div className='Txt_Box'>
                        <p>Texto propaganda para as datas comemorativas.</p>
                        <Link className="LK" to='loja'><button className='Btn'>Loja</button></Link>
                    </div>
                    <div className='Img_Box'>
                        <img src={Logo} alt='img'/>
                    </div>
                    
                </div>  
                
                
            </div>
        );
    };
};
export default Home;