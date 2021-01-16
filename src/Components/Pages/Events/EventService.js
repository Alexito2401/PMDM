import axios from 'axios';

export default class EventService {

    getEvents() {
        return axios.get('https://localhost:44380/api/Eventos').then(res => (res.data));
    }

    deleteEvents(email) {
        axios.delete('https://localhost:44380/api/Usuarios/' + email)
    }

    changeDateEvents(fecha, id){
        axios.put('https://localhost:44380/api/Eventos/'+id+'?fecha='+fecha+'').then(console.log('Date Changed'))
    }
}
