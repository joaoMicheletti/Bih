import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import './style_home.css';

function Home(){
    return(
        <div className='Home_Container' id='Home_Container'>

            <header className='Navigation' id='Navigation'>
                <img className='Logo' id='Logo' alt='Logo' src={Logo}/>
                <nav className='Menu' id='Menu'>
                    <Link to='loja' onClick={() => Navigate('loja')}>Loja</Link>
                    <Link to='register'>Registrar-se</Link>
                    <Link to='login' >Login</Link>

                </nav>
            </header>

            <div className='Conteudo' id='Conteudo'>
                <div className='Txt_Box'>
                    <p>Testo propaganda para as datas comemorativas
                        dia dos namorados, maes, pai, avos, etc....
                    </p>
                    <button className='Btn'><Link to='loja'>Nossa Loja</Link></button>
                </div>
                <div className='Img_Box' id='Img_Box'>
                    <img src={Logo} alt='Imagem da propaganda'/>
                </div>
            </div>
        </div>
    );
}
export default Home;