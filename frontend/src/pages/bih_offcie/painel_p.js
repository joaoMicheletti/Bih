import React, {useState} from "react";
import './style_login.css';
import { Link } from "react-router-dom";

export default function Painel_p(){
    // var of Salgados... end doces
    const [Image, setImage] = useState('');
    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Preço, setPreço] = useState('');
    const [Status, setStatus] = useState('');
    //var of propaganda
    const [Texto, setTexto] = useState('');
    const [Image_p , setImage_p] = useState('');

    
    const Salgados = (e) => {
        e.preventDefault();
        const Data = {
            Image,
            Name,
            Description,
            Preço,
            Status
        }
        console.log(Data);
        console.log(Data.Image[0]);
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
        console.log(Data.Image[0]);
    };

    const Propaganda = (e) => {
        e.preventDefault();
        const Data = {
            Texto,
            Image_p
        }
        console.log(Data);
        console.log(Data.Image_p[0]);
    };


    return(
        <div className="Produtos_Container">
            <header>
                <nav>
                    <Link to='p_salgados'>Painel_Salgados</Link>
                    <Link to='p_doces'>Painel_Doces</Link>
                    <Link to='' >Log_out</Link>
                </nav>                
            </header>
            <div className="Forms_Container">

                <form className="Form_Salgados" onSubmit={Salgados}>
                    <h2>Salgados</h2>
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
                

                </form>
                
                <form className="Form_Propaganda" onSubmit={Propaganda}>
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