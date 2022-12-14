import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/index'; // home
import Loja from './pages/loja/index';//loja doces
import Salgados from './pages/loja/salgados'; // loja salgados
import Register from './pages/register/index'; //registro de usuarios 
import Login from './pages/login/index'; // login de usuarios 
import Carrinho from '../src/pages/loja/carrinho';
import Exit from '../src/pages/loja/exit';


//adm imports 
import Cbia from './pages/bih_offcie/index';//logind to adm
import Doces from './pages/bih_offcie/painel_d'; //painel de doces
import Cadastro from './pages/bih_offcie/painel_p'; //painel de cadastro
import SSalgados from  './pages/bih_offcie/painel_s'; //painel de salgados
import Pedidos from './pages/bih_offcie/pedidos'; //painel de pedidos


class Rotas extends Component {
    render() {
        return(
            <Router>
                <Routes>
                    <Route path='/'  element={<Home />} />
                    <Route path='loja' element={<Loja/>}/>
                    <Route path='salgados' element={<Salgados/>} /> 
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='carrinho' element={<Carrinho/>} />
                    <Route path='exit' element={<Exit/>}/>
                    
                    <Route path='login_bia' element={<Cbia/>}/>
                    <Route path='p_doces' element={<Doces/>} />
                    <Route path='p_cadastro_itens' element={<Cadastro/>}/>
                    <Route path='p_salgados' element={<SSalgados/>} />
                    <Route path='pedidos' element={<Pedidos/>} />


                    <Route path='*' element={<h1>Pagina não encontrada retorne!</h1>}/>

                    
                </Routes>
            </Router>
        );
    }
}
export default Rotas;
