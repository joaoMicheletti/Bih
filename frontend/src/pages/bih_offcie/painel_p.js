import React, {useState} from 'react';
import './style_login.css';
import {Link} from 'react-router-dom';
import Api from '../../services/api';
import api from '../../services/api';

function Painel_p(){

        // var of Salgados... end doces
    const [Image, setImage] = useState('');
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Preço, setPreço] = useState('');
    const [Status, setStatus] = useState('');
        //var of propaganda
    const [Texto, setTexto] = useState('');
    const [Image_p, setImage_p] = useState('');

    var img_Salgado = '';

 // enviando img dos salgasos para o backend.
    const Img_Salgado = async (e) => {
        e.preventDefault();
        
        const formadata = new FormData();
        formadata.append('image', Image); 

        console.log(formadata);
        const headers = {
            'headers': {
                'content-Type': 'aplication/json',
            }
        }
        
        const response1 = await api.post('/create_img_s', formadata, headers );
        img_Salgado = response1;
        
    };
    //enviando descrições dos salgados para o backend.
    const Salgados = async (e) => {
        e.preventDefault();

        const Data = {
            Name,
            Description,
            Preço,
            Status,
            img_Salgado
        };

        const response0 = await Api.post('/create_product_s', Data)
        try{
            console.log(response0);
            if(response0.data === 'cadastrado'){
                alert('Dados cadastrados');
            } 

        }catch(err){
            alert('Erro: ao cadastrar as informações, tente mais tarde!');
        };
    };

    const Doces = (e) => {
        e.preventDefault();
        const Data = {
            Image,
            Name,
            Description,
            Preço,
            Status
        }
        console.log(Data);
        
    };

    const Propaganda = async (e) => {
        e.preventDefault();
        const Data = {
            Texto,
            Image_p,
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }
        console.log(Data.Image_p[0]);

        try {
            const response = await Api.post('/prop_c');
            alert(response);


        } catch (err) {
            alert('Erro catch');
        }
    };

    return(

        <div className="Produtos_Container">
            <header>
                <nav id='Cadastro_itens'>
                    <Link to='/p_salgados'>Painel_Salgados</Link>
                    <Link to='/p_doces' >Painel_Doces</Link>
                    <Link to='' >Exit</Link>
                </nav>                
            </header>
            <div className="Forms_Container">

                <form className="Form_Salgados" onSubmit={Salgados}>
                    <h2>Salgados</h2><br/>

                    <div id='Img_salgado'>

                    <p>anexar uma imagem</p>
                    <input type="file"
                    id="Img_Salgado" 
                    onChange={(e) => setImage(e.target.files[0])}></input>
                    <button type='submit' onClick={Img_Salgado}>anexar</button>
                    </div>

                    
                    <p>Nome Do produto:</p>
                    <input type='text' placeholder="Nome do produto"
                    onChange={(e) => setName(e.target.value)}/>
                    <p>Descrição:</p>
                    <input type='text' placeholder="Descrição do produto"
                    onChange={(e) => setDescription(e.target.value)}/>
                    <p>Preço do produto:</p>
                    <input type='test' placeholder="Preço do produto"
                    onChange={(e) => setPreço(e.target.value)}/>
                    <p>Status:</p>
                    <input type='text' placeholder="Status do produto"
                    onChange={(e) => setStatus(e.target.value)}/>
                    <button type="submit">Criar</button>

                </form>

                <form className="Form_Doces" onSubmit={Doces}>
                    <h2>Doces</h2>
                    <p>Selecione a imagem</p>
                    <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => setImage(e.target.files)}></input>
                    <p>Nome Do produto:</p>
                    <input type='text' placeholder="Nome do produto"
                    onChange={(e) => setName(e.target.value)}/>
                    <p>Descrição:</p>
                    <input type='text' placeholder="Descrição do produto"
                    onChange={(e) => setDescription(e.target.value)}/>
                    <p>Preço do produto:</p>
                    <input type='test' placeholder="Preço do produto"
                    onChange={(e) => setPreço(e.target.value)}/>
                    <p>Status:</p>
                    <input type='text' placeholder="Status do produto"
                    onChange={(e) => setStatus(e.target.value)}/>
                    <button type="submit">Criar</button>
                

                </form >
                
                <form className="Form_Propaganda" onSubmit={Propaganda} >
                    <h2>Propaganda</h2>
                    <p>Selecione a imagem</p>
                    <input type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => setImage_p(e.target.files)}></input>
                    <p>Texto da propaganda:</p>
                    <input type='test' placeholder="Texto da propaganda"
                    onChange={(e) => setTexto(e.target.value)}/>
                    <button type="submit">Criar</button>
                    <button type="submit">Editar</button>
                    
                </form>
            </div>
        </div>
    );
}
export default Painel_p;