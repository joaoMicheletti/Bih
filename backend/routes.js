const express = require('express');
//prop 'get, post, update,
const prop = require('./src/controllers/prop');
//create a product 
const create_products = require('./src/controllers/create_products');
//update a product 
const update_products = require('./src/controllers/update_products');
//create adm / login
const create_login = require('./src/controllers/adm');
// register user 
const user =  require('./src/controllers/user');
//multer
const multer = require('multer');
const multerConfig = require('./src/multer');
//carrinho
const Carrinho = require('./src/controllers/carrinho');
//carrinho pedido
const Pedido = require('./src/controllers/pedido');
//listagem de pedidos
const List = require('./src/controllers/pedidos_list');
//Calculando o frete com base na distância entre dois pontos em linha reta .
const Frete = require('./src/controllers/frete.js'); 
const routes = express.Router();

//routes#
//routes of adiministrator!.
routes.post('/prop_c', prop.create_prop); //create a propaganda
routes.post('/propaganda_img', multer(multerConfig).single("image"), prop.Img_prop);// salvando a imagem da propaganda! 
routes.get('/index_prop', prop.get_prop_img); // listando propaganda
routes.put('/prop_u', prop.update_prop); //update a propaganda
// fata apenas definir quem pode ou não criar / editar a propaganda!


//rotas #salgados
routes.post('/create_product_s', create_products.create_product_s); //create a products salgados
routes.post('/create_img_s', multer(multerConfig).single("image"), create_products.create_img_s); // salvando a imagem dos salgado
routes.get('/index_salgados', create_products.Get_Salgadso); // buscando produtos do tipo (salgado) disponivel para a loja
routes.get('/index_salgados_adm', create_products.Get_Salgado_adm); //listagem para o adm. 
routes.put('/update_product_s', update_products.update_products_s); //update a products  s  


//rotas #doces
routes.post('/create_product_d', create_products.create_product_d); //create a products doces
routes.post('/create_img_d', multer(multerConfig).single("image"), create_products.create_img_d); // salvando a imagem dos doces!
routes.get('/index_doces', create_products.Get_Doces); // buscando produtos do tipo (doce)! #disponiveis na loja.
routes.get('/index_doces_adm',  create_products.Get_Doces_adm); // listagem para o adm.
routes.put('/update_product_d', update_products.update_products_d); //update a products  d





routes.post('/adm_create', create_login.create_adm); //create a adm user
routes.post('/adm_login', create_login.login_adm); //create a session adm user
routes.get('/index', create_login.Index_adm); // get a all user's adm!

//routes of users.
routes.post('/create_user',  user.register_user); //create a user
routes.post('/user_login', user.login_user); //create a session user // login

// rotas do carrinho:
routes.post('/carrinho', Carrinho.Doce);
routes.post('/carrinho_index_d', Carrinho.Index_Doce);
routes.post('/confirm_doce', Carrinho.Index_Doces_Confirm); // buscando pedido para confimação. 

//salgado
routes.post('/carrinho_s', Carrinho.Salgado);
routes.post('/carrinho_index_s', Carrinho.Index_Salgado);
routes.post('/confirm_salgado', Carrinho.Index_Salgado_Confirm); // buscando pedido para confimação

routes.put('/carrinho_upload', Carrinho.Update_D);//update data do pedido finalizado Doce
routes.put('/carrinho_upload_s', Carrinho.Update_S); //update data do pedido finalizado Salgado;
routes.post('/estoque_s', Carrinho.Estoque_S); // consulta, ver se e possivel efetuar o pedido.
routes.post('/estoque_d', Carrinho.Estoque_D); // ^^^^^^^^^^^ Doces.
// deletando iten do carrinho
routes.delete('/carrinho_delete', Carrinho.Deletar);
routes.delete('/carrinho_delete_s', Carrinho.Dell_s);
// atualizando o estoque após a compra do iten
routes.put('/estoque_d', create_products.Update_Estoque_Doce);//update estoque dos doces.
routes.put('/estoque_s', create_products.Update_Estoque_Salgado);//update estoque dos salgados.

//pedidos
routes.post('/carrinho_pedido', Pedido.Create);
routes.get('/pedidos', List.Index);
//função que separa os pedidos recebidos dos enviados.
routes.put('/pedidos_upload', List.Upload_pedido);
routes.get('/pedidos_vendidos', List.List_vendidos);

// calcular frete;
routes.post('/frete_calc', Frete.Index);
module.exports = routes;