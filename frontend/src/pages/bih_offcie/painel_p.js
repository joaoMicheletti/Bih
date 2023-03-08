import React, {useState} from 'react';
import './style_login.css';
import {Link, useNavigate} from 'react-router-dom';
import Api from '../../services/api';
import api from '../../services/api';

function Painel_p(){
    const Navigate = useNavigate('');

        // var of Salgados... end doces
    const [Image, setImage] = useState('');
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Preço, setPreço] = useState('');
    const [Estoque, setEstoque] = useState('');
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
        } else if(Status !== 'on' && Status !== 'off'){
            document.querySelector('#Alerta').innerHTML = "Defina o Status como [ON / OFF]...";
        } else{
            
            document.querySelector('#Alerta').innerHTML = "Imagem salva com sucesso!";
            const response1 = await api.post('/create_img_s', formadata, headers );
            img_Salgado = response1.data;
            console.log(img_Salgado);
            return img_Salgado = response1.data;

        };        
        
    };
    //enviando descrições dos salgados para o backend.
    const Salgados = async (e) => {
        e.preventDefault();

        if (img_Salgado === ''){
            document.querySelector('#Alerta').innerHTML = '1° anexe a (imagem) !!!@';
            
        } else  if (Image === '') {
            document.querySelector('#Alerta').innerHTML = "Selecione uma (imagen)@";
        } else if (Name === ''){
            document.querySelector('#Alerta').innerHTNL = "Preencha o Campo (Nome)@";
        }  else if (Description === ''){
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Descrição)@";
        } else if (Preço === '') {
            document.querySelector('#Alerta').innerHTML = "Preencha o campo (Preço)@";
        } else if (Estoque === '') {
            document.querySelector('#Alerta').innerHTML = 'Preencha o campo (Estoque)@';
        }else if (Status === '') {
            document.querySelector('#Alerta').innerHTML = "preencha o campo (Status)@";
        } else if(Status !== 'on' && Status !== 'off' ){
            document.querySelector('#Alerta').innerHTML = "Defina o Status como [ON / OFF]...";
        } else {
            const Authentication = window.prompt("Senha Do Adiministrador.");
            const Data = {
                Name,
                Description,
                Preço,
                Estoque,
                Status,
                img_Salgado,
                Authentication
            };
            console.log(Data);
            const response0 = await Api.post('/create_product_s', Data)
            try{
                console.log(response0);
                if(response0.data === 'Dados cadastrados'){
                alert('Dados cadastrados');
                Navigate('/p_salgados');
                } else {
                    alert(response0.data);
                    Navigate('/p_salgados');
                }
                

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

        if (Image === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "anexe a imagem!";
        } else if (Name === ''){
            document.querySelector('#Alerta_Doce').innerHTNL = "Preencha o Campo (Nome)@";
        }  else if (Description === ''){
            document.querySelector('#Alerta_Doce').innerHTML = "Preencha o campo (Descrição)@";
        } else if (Preço === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "Preencha o campo (Preço)@";
        } else if (Status === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "preencha o campo (Status)@";
        }else if(Status !== 'on' && Status !== 'off'){
            document.querySelector('#Alerta_Doce').innerHTML = "Defina o Status como [ON / OFF]...";
        } else {
            
            document.querySelector("#Alerta_Doce").innerHTML = "Imagem enviadda com sucesso!";
            const response = await Api.post('/create_img_d', formadata, headers);
            return img_Doce = response.data;
        };

    };
    // enviando  descrição dos doces para o backebd!
    
    const Doces = async (e) => {
        e.preventDefault();

        if (img_Doce === ''){
            document.querySelector('#Alerta_Doce').innerHTML = '1° anexe a (imagem) !!!@';
        } else if (Image === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "Selecione uma (imagen)@";
        } else if (Name === ''){
            document.querySelector('#Alerta_Doce').innerHTNL = "Preencha o Campo (Nome)@";
        }  else if (Description === ''){
            document.querySelector('#Alerta_Doce').innerHTML = "Preencha o campo (Descrição)@";
        } else if (Preço === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "Preencha o campo (Preço)@";
        } else if (Estoque === ''){
            document.querySelector("#Alerta_Doce").innerHTML = "Preench o campo (Estoque)";
        }
        else if (Status === '') {
            document.querySelector('#Alerta_Doce').innerHTML = "preencha o campo (Status)@";
        }else if(Status !== 'on' && Status !== 'off'){
            document.querySelector('#Alerta_Doce').innerHTML = "Defina o Status como [ON / OFF]...";
        } else {
            const Authentication = window.prompt("Senha Do Adiministrador.");
            const Data = {
                Name,
                Description,
                Preço,
                Status,
                Estoque,
                img_Doce,
                Authentication
            }
            const response = await Api.post('/create_product_d', Data)
            try{
                if(response.data === 'iten cadastrado!'){
                    alert(response.data);
                    Navigate('/p_doces');
                } else {
                    alert(response.data);
                    Navigate('/p_doces');
                };
                

            } catch(err){

            };
            
        };
        
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
    
        if (Image_p === '') {
            document.querySelector('#Alerta_Prop').innerHTML = "Selecione uma imagen!!!@";
        } else if (Texto === ''){
            document.querySelector('#Alerta_Prop').innerHTML = 'Preencha o campo (texto da propaganda)@ ';
        } else {
            document.querySelector("#Alerta_Prop").innerHTML = "Imagem enviada com sucesso.";
            const response = await Api.post('/propaganda_img', formadata, headers);
            return img_propaganda = response.data;
        };
        
    };

    // enviando descrição da propaganda dos produtos!
    const Propaganda = async (e) => {
        e.preventDefault();
        if(img_propaganda === ''){
            document.querySelector('#Alerta_Prop').innerHTML = 'Selecione uma imagem';
        } else {

            const Authentication = window.prompt("Senha Do Adiministrador");
        
        const Data = {
            Texto,
            img_propaganda,
            Authentication
        };
        const Edit_or_no =  await Api.get('/index_prop')
        if (Edit_or_no.data.length > 0){           

            const Res_UP = await Api.put('/prop_u', Data)
            try{
                if (Res_UP.data === 'ok'){
                    alert("Propaganda atualizada com sucesso!!!");
                    Navigate('/p_doces');

                } else {
                    alert(Res_UP.data);
                    Navigate('/p_doces');
                };
                
            } catch(err){
                alert('Algo não saiu como esperado, tente mais tarde!');
            };

        } else {
            if (img_propaganda === ''){
                document.querySelector('#Alerta_Prop').innerHTML = '1° anexe a (imagem) !!!@';   
            } else if (Image_p === '') {
                document.querySelector('#Alerta_Prop').innerHTML = "Selecione uma imagen!!!@";
            } else if (Texto === ''){
                document.querySelector('#Alerta_Prop').innerHTML = 'Preencha o campo (texto da propaganda)@ ';
            } else {
                const response = await Api.post('/prop_c', Data)
                try{
                    alert(response.data);
                    Navigate('/p_doces');
                } catch(err){
                    alert('Erro no cadastro ! tente mais tarde ');
                };
    
            };
        };

        };
               
    };

    return(

        <div className="Produtos_Container">
            <header>
                <nav id='Cadastro_itens'>
                    <Link id="Link" to='/p_salgados'>Painel_Salgados</Link>
                    <Link id="Link" to='/p_doces' >Painle_Doces</Link>
                    <Link to='/pedidos'>Pedidos_Recebidos</Link>
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
                    <input type='text' placeholder="Preço do produto"
                    onChange={(e) => setPreço(e.target.value)}/>
                    <p>Estoque</p>
                    <input type='text' placeholder='Estoque'
                    onChange={(e) => setEstoque(e.target.value)}/>
                    <p>Status:</p>
                    <input type='text' placeholder="Status do produto"
                    onChange={(e) => setStatus(e.target.value)}/>
                    <button type="submit">Criar</button>

                </form>

                <form className="Form_Doces" onSubmit={Doces}>
                    <h2>Doces</h2>

                    <p id="Alerta_Doce"></p>

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
                    <p>Estoque:</p>
                    <input type='text' placeholder='Estoque'
                    onChange={(e) => setEstoque(e.target.value)}/>
                    <p>Status:</p>
                    <input type='text' placeholder="Status do produto"
                    onChange={(e) => setStatus(e.target.value)}/>
                    <button type="submit">Criar</button>
                

                </form >
                
                <form className="Form_Propaganda" onSubmit={Propaganda} >
                    <h2>Propaganda / editar</h2>
                    <p id="Alerta_Prop"></p>

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
                    <button type="submit">Criar / Editar</button>
                    
                </form>
            </div>
        </div>
    );
}
export default Painel_p;