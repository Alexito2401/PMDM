import axios from 'axios';

export default class EventService {

    getEvents() {
        return axios.get('https://localhost:44380/api/Eventos').then(res => (res.data));
    }

    deleteEvents(id) {
        axios.delete('https://localhost:44380/api/Eventos/'+id).then(console.log('Delete Event'))
    }

    changeDateEvents(fecha, id){
        axios.put('https://localhost:44380/api/Eventos/'+id+'?fecha='+fecha+'').then(console.log('Date Changed'))
    }

    postEvent(local, visitante, fecha){
        axios.post('https://localhost:44380/api/Eventos?local='+local+'&visitante='+visitante+'&fecha='+fecha+'').then(console.log('Evento añadido'))
    }
}