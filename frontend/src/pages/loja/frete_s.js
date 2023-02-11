import React from "react";
import './style_loja.css';
import Logo from '../assets/Logo.jpg';

export default function Frete_s(){
 

    function Frete_s(frete, city){
        console.log(frete);
        console.log(city);
    }

    return(
        <div id="Frete_container">
            <header>
                <img id="IMG_Frete" src={Logo} alt='Logo'/>
            </header>
            <h4 id="regiao">Atendemos táis Ragiões</h4>
            <div id="Options">
                
                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo">Jandira - Jd Alvorada 1/2 </p>
                    <br/>
                    <p id="Valor_frete">R$ 4,00</p>
                    <br/>
                    <button type="button" onClick={Frete_s}>Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Centro </p>
                    <br/>
                    <p id="Valor_frete">R$ 5,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Fátima </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Parque Inglesias </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD São João  </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Condomínio Nova Paulista </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Paulmeiras </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Sorocabano </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Ercilia </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Lindomar </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Heneilde </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Eunice </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Esmeralda </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Mirante </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Mária </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Gabreiela </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira -  Vila Goudinho </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Brotinho </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Europa </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Parque do Lago </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Pq. Santa Tereza </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>
                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD das Margaridas </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Masé </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD do Golfo </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Condomíno Santa Mariah </p>
                    <br/>
                    <p id="Valor_frete">1R$ 4,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Sol nacente </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD dos Altos </p>
                    <br/>
                    <p id="Valor_frete">1R$ 3,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vale do Sol </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Cristiano </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Novo Horizonte </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Ouro Verde </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Belmonte </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Centenário </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Ype </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Patriarca </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Sagrado Coração </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>
                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Popi </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Rolim</p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Lucinda </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - JD Analândia </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Jandira - Vila Mercedes </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - Alto Da Colina </p>
                    <br/>
                    <p id="Valor_frete">1R$ 4,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi  - Briquete </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - JD Paulista </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - Rainha </p>
                    <br/>
                    <p id="Valor_frete"> 1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - Nova Itapevi </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - JD Santo Américo </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - Rosemery </p>
                    <br/>
                    <p id="Valor_frete">1R$ 2,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - JD Hokkaido </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - JD Cardoso </p>
                    <br/>
                    <p id="Valor_frete">R$ 8,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi </p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Itapevi - JD Vitapolis</p>
                    <br/>
                    <p id="Valor_frete">R$ 6,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - JD Paulista </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - PQ Inperial </p>
                    <br/>
                    <p id="Valor_frete">1R$ 5,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - Maria Helena </p>
                    <br/>
                    <p id="Valor_frete">1R$ 3,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - JD Aldeia de Barueri</p>
                    <br/>
                    <p id="Valor_frete">1R$ 2,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>


                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - JD Silveira </p>
                    <br/>
                    <p id="Valor_frete">R$ 9,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - Centro </p>
                    <br/>
                    <p id="Valor_frete">1R$ 0,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - JD Califórnia </p>
                    <br/>
                    <p id="Valor_frete">1R$ 3,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Barueri - Alphaville </p>
                    <br/>
                    <p id="Valor_frete">1R$ 7,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

                <div id="City">
                    <img src={Logo} alt='Frete'/>
                    <br/>
                    <p id="Bairo"> Carapicúiba - todos </p>
                    <br/>
                    <p id="Valor_frete">1R$ 9,00</p>
                    <br/>
                    <button type="submit">Selecionar Frete</button>
                </div>

            </div>
        </div>
    )
}