import axios from 'axios';

export default class EventService {
    getEvents() {
        return axios.get('https://localhost:44380/api/Eventos').then(res => (res.data));
    }

    deleteEvents(email) {
        axios.delete('https://localhost:44380/api/Usuarios/' + email)
    }

    changeDateEvents(contraseña, email){
        axios.put('https://localhost:44380/api/Usuarios?email='+email+'&contrasena='+contraseña)
    }
}