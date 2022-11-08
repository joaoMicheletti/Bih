const express = require('express');
//prop 'get, post, update,
const prop = require('./src/controllers/prop');
//seach 'get'
const search_products = require('./src/controllers/search_products');
//create a product 
const create_products = require('./src/controllers/create_products');
//update a product 
const update_products = require('./src/controllers/update_products');
//delete a products 
const delete_products = require('./src/controllers/delete_products');
//create adm / login
const create_login = require('./src/controllers/adm');
// register user 
const user =  require('./src/controllers/user');
//multer
const multer = require('multer');
const multerConfig = require('./src/multer');


const routes = express.Router();

//routes#
//routes of adiministrator!.
routes.post('/prop_c', prop.create_prop); //create a propaganda
routes.put('/prop_u', prop.update_prop); //update a propaganda
routes.post('/propaganda_img', multer(multerConfig).single("image"), prop.Img_prop);// salvando a imagem da propaganda! 
routes.get('/index_prop', prop.get_prop_img); // listando propaganda

//rotas #salgados
routes.post('/create_product_s', create_products.create_product_s); //create a products salgados
routes.post('/create_img_s', multer(multerConfig).single("image"), create_products.create_img_s); // salvando a imagem dos salgado
routes.get('/index_salgados', create_products.Get_Salgadso); // buscando produtos do tipo (salgado) cadastrado!

//rotas #doces
routes.post('/create_product_d', create_products.create_product_d); //create a products doces
routes.post('/create_img_d', multer(multerConfig).single("image"), create_products.create_img_d); // salvando a imagem dos doces!
routes.get('/index_doces', create_products.Get_Doces); // buscando produtos do tipo (doce)!

routes.put('/update_product_s', update_products.update_products_s); //update a products  s
routes.put('/update_product_d', update_products.update_products_d); //update a products  d

routes.delete('/dell_product_s', delete_products.delete_s); // delete a products s
routes.delete('/dell_product_d', delete_products.delete_d); //delete a products  d

routes.post('/adm_create', create_login.create_adm); //create a adm user
routes.post('/adm_login', create_login.login_adm); //create a session adm user
routes.get('/index', create_login.Index_adm); // get a all user's adm!


//global routes
//routes.get('/prop_s', prop.search_prop);
routes.get('/searche_s', search_products.search_s); //search on salgados
routes.get('/searche_d', search_products.search_d); // search on doces
//routes of users.
routes.post('/create_user',  user.register_user); //create a user
routes.post('/user_login', user.login_user); //create a session user


module.exports = routes;