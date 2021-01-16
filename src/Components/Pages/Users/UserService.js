import axios from 'axios';

export default class UserService {
    getUsers() {
        return axios.get('https://localhost:44380/api/Usuarios').then(res => (res.data));
    }

    deleteUsers(Id) {
        axios.delete('https://localhost:44380/api/Usuarios/' + Id)
    }

    changePassword(contraseña, email){
        axios.put('https://localhost:44380/api/Usuarios?email='+email+'&contrasena='+contraseña).then(console.log(contraseña +" Nueva para "+ email))
    }
}
