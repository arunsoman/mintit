import axios, { AxiosInstance } from "axios";

const client = (() :AxiosInstance => {
    return axios.create({
        headers: {
            'crossDomain': 'true',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          }, 
        baseURL: 'http://localhost:3333',
    });
})()

export default client;