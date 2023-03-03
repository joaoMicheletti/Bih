import axios from "axios";
/*
const api = axios.create({
    baseURL: "http://localhost:3001"
});*/

const api = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 100000,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
  });


export default api;
