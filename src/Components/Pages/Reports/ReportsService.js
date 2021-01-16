import axios from 'axios';

export default class ReportsServive {
    getCountUser() {
        return axios.get('https://localhost:44380/api/UsuarioCount').then(res => (res.data));
    }

    getCountBet() {
        return axios.get('https://localhost:44380/api/ApuestasCount').then(res => (res.data));
    }
    
}
