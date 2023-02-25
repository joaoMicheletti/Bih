import React, {useEffect, useState} from 'react';
import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import './style_home.css';
import Api from '../../services/api';


function Home(){
    
        
    
    const [itens, setItens] = useState([]);
    useEffect(() => {
        Api.get('/index_prop')
        .then((Response) => {
            setItens(Response.data)
                    
        })
        .catch(() => {
            console.log('erro')
            
        })
    }, []);
    const VM = '< VM_Software />';
    return(
        <div className='Home_Container' id='Home_Container'>

            <header className='Navigation' id='Navigation'>
                <img className='Logo' id='Logo' alt='Logo'  src={Logo}/>
                <nav className='Menu' id='Menu'>
                    <Link to='/loja' >Loja</Link>
                    <Link to='/register'>Registrar-se</Link>
                    <Link to='/login' >Login</Link>

                </nav>
            </header> 

            {itens.map((iten, key) => {
                const url = 'http://localhost:3001/files/';

                return(
                    <div key={iten.id} className='Conteudo' id='Conteudo'>
                        
                        <div id='FLEX'>
                            <div className='Img_Box' id='Img_Box'>
                                <img src={url + iten.img_propaganda} alt='Imagem da propaganda'/>
                            </div>
                    
                            <div  className='Txt_Box' id='Txt_Box' > 
                                <p id='PP'>{iten.Texto}</p>
                                <button id='Btn' className='Btn'><Link to='/loja'>Loja</Link></button>
                            </div>
                        </div>
                        
                    </div>
                );
                })}
            
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
export default Home;