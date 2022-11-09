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
        };
        

        if (Image === '') {
            document.querySelector('#Alerta').innerHTML = "Selecione uma (imagen)@";
        } else if (Name === ''){
            document.querySelector('#Alerta').innerHTNL = "Preencha o Campo (Nome)@";
        }  else if (Description === ''){
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Descrição)@";
        } else if (Preço === '') {
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Preço)@";
        } else if (Status === '') {
            document.querySelector('#Alerta').innerHTML = "preencha o campo (Status)@";
        } else {
            const response1 = await api.post('/create_img_s', formadata, headers );
            img_Salgado = response1.data;
            console.log(img_Salgado);
            return img_Salgado = response1.data;

        };
        
        
    };
    //enviando descrições dos salgados para o backend.
    const Salgados = async (e) => {
        e.preventDefault();
        console.log(img_Salgado);

        const Data = {
            Name,
            Description,
            Preço,
            Status,
            img_Salgado
        };
        
        if (Image === '') {
            document.querySelector('#Alerta').innerHTML = "Selecione uma (imagen)@";
        } else if (Name === ''){
            document.querySelector('#Alerta').innerHTNL = "Preencha o Campo (Nome)@";
        }  else if (Description === ''){
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Descrição)@";
        } else if (Preço === '') {
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Preço)@";
        } else if (Status === '') {
            document.querySelector('#Alerta').innerHTML = "preencha o campo (Status)@";
        } else {
            const response0 = await Api.post('/create_product_s', Data)
            try{
                console.log(response0);
                if(response0.data === 'cadastrado'){
                alert('Dados cadastrados');
                };

            }catch(err){
                alert('Erro: ao cadastrar as informações, tente mais tarde!');
            };

        };

        
    };


    //enviando a img do produto do tipo Doce!
    var img_Doce = '';
    const Doce_img = async (e) => {
        e.preventDefault();

        const formadata = new FormData();
        formadata.append('image', Image);

        const headers = {
            'headers' :{
                'content-type': 'aplication/json',
            } 
        }
        console.log(formadata);
        console.log('ola ');

        const response = await Api.post('/create_img_d', formadata, headers);
        return img_Doce = response.data;

    };
    // enviando  descrição dos doces para o backebd!
    
    const Doces = async (e) => {
        e.preventDefault();
        const Data = {
            Name,
            Description,
            Preço,
            Status,
            img_Doce
        }
        console.log(Data);

        const response = await Api.post('/create_product_d', Data)
        alert(response.data);
        
    };


    //enviando a imagem da propaganda !
    var img_propaganda = '';
    const Propaganda_Img = async (e) => {
        e.preventDefault();

        const formadata = new FormData();
        formadata.append('image', Image_p);

        const headers = {
            'headers': {
                'content-type': 'aplication/json',
            }
        };
        const response = await Api.post('/propaganda_img', formadata, headers);
        return img_propaganda = response.data;
    }

    // enviando descrição da propaganda dos produtos!
    const Propaganda = async (e) => {
        e.preventDefault();
        const Data = {
            Texto,
            img_propaganda
        };
        console.log(Data);
        const response = await Api.post('/prop_c', Data);
        alert(response.data);
        
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
                    <p id="Alerta"></p>

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

                    <div id='Img_salgado'>

                    <p>anexar uma imagem</p>
                    <input type="file"
                    id="Img_Salgado" 
                    onChange={(e) => setImage(e.target.files[0])}></input>
                    <button type='submit' onClick={Doce_img}>anexar</button>
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
                

                </form >
                
                <form className="Form_Propaganda" onSubmit={Propaganda} >
                    <h2>Propaganda</h2>

                    <div id='Img_salgado'>

                    <p>anexar uma imagem</p>
                    <input type="file"
                    id="Img_Salgado" 
                    onChange={(e) => setImage_p(e.target.files[0])}></input>
                    <button type='submit' onClick={Propaganda_Img}>anexar</button>
                    </div>

                    <p>Texto da propaganda:</p>
                    <input type='test' placeholder="Texto da propaganda"
                    onChange={(e) => setTexto(e.target.value)}/>
                    <button type="submit">Criar</button>
                    
                </form>
            </div>
        </div>
    );
}
export default Painel_p;