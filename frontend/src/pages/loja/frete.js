import React from "react";
import './style_loja.css';
import Logo from '../assets/Logo.jpg';

export default function Frete(){

    return(
        <div id="Frete_container">
            <header>
                <img id="IMG_Frete" src={Logo} alt='Logo'/>
            </header>
            <h4 id="regiao">Atendemos estas Ragiões</h4>
            <div id="Options">
                
                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo">Bairo : </p>
                    <br/>
                    <p id="Valor_frete">5,00$R</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo">Bairo : </p>
                    <br/>
                    <p id="Valor_frete">5,00$R</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo">Bairo : </p>
                    <br/>
                    <p id="Valor_frete">5,00$R</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>
            </div>
        </div>
    )
}