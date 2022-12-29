import React, {useEffect, useState} from 'react';
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
                const url ='http://localhost:3001/files/';

                return(
                    <div key={iten.id} className='Conteudo' id='Conteudo'>
                        
                        <div id='FLEX'>
                            <div className='Img_Box' id='Img_Box'>
                                <img src={url + iten.img_propaganda} alt='Imagem da propaganda'/>
                            </div>
                    
                            <div  className='Txt_Box' id='Txt_Box' > 
                                <p id='PP'>{iten.Texto}</p>
                                <button className='Btn'><Link to='/loja'>Loja</Link></button>
                            </div>
                        </div>
                        
                    </div>
                );
                })}
            

        </div>
    );
}
export default Home;