const express = require('express');
const bodyparser = require('body-parser');
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


const routes = express.Router();

//routes#
//routes of adiministrator!.
routes.post('/prop_c', prop.create_prop); //create a prop
routes.put('/prop_u', prop.update_prop); //update a prop
routes.post('/create_product_s', create_products.create_product_s); //create a products s
routes.post('/create_product_d', create_products.create_product_d); //create a products d 

routes.put('/update_product_s', update_products.update_products_s); //update a products  s
routes.put('/update_product_d', update_products.update_products_d); //update a products  d

routes.delete('/dell_product_s', delete_products.delete_s); // delete a products s
routes.delete('/dell_product_d', delete_products.delete_d); //delete a products  d

routes.post('/adm_create', create_login.create_adm); //create a adm user
routes.post('/adm_log_login', create_login.login_adm); //create a session adm user


//global routes
routes.get('/prop_s', prop.search_prop);
routes.get('/searche_s', search_products.search_s); //search on salgados
routes.get('/searche_d', search_products.search_d); // search on doces
//routes of users.
routes.post('/create_user',  user.register_user); //create a user
routes.post('/user/log/login', user.login_user); //create a session user


module.exports = routes;