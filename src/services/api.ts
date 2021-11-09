import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefabackend1.herokuapp.com/'
})
 
export default api;