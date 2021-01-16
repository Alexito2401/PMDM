import axios from 'axios';

export default class BetsServive {
    getBets() {
        return axios.get('https://localhost:44380/api/Apuestas').then(res => (res.data));
    }

    getEvents(){
        return axios.get('https://localhost:44380/api/Eventos').then(res => (res.data));
    }

    getMarkets(){
        return axios.get('https://localhost:44380/api/Mercados').then(res => (res.data));
    }

    insertMarkets(id){
        axios.post('https://localhost:44380/api/Mercados/'+id);
    }

    blockMarkets(id){
        axios.put('https://localhost:44380/api/Mercados/'+id)
    }

    deleteUsers(Id) {
        axios.delete('https://localhost:44380/api/Usuarios/' + Id)
    }

    changePassword(contraseña, email){
        axios.put('https://localhost:44380/api/Usuarios?email='+email+'&contrasena='+contraseña).then(console.log(contraseña +" Nueva para "+ email))
    }
}
