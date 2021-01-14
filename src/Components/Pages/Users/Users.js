import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UserService from './UserService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './Users.css';

const Users = () => {
    let emptyuser = {
        email: "",
        nombre: '',
        apellido: "",
        edad: null,
        contraseña: ''
    };

    const [users, setusers] = useState(null);
    const [password, setpassword] = useState(null);
    const [userDialog, setuserDialog] = useState(false);
    const [deleteuserDialog, setDeleteuserDialog] = useState(false);
    const [edituserPassWord, setedituserPassword] = useState(false);
    const [search, setSearch] = useState(null);
    const [user, setuser] = useState(emptyuser);
    const toast = useRef(null);
    const dt = useRef(null);
    const userService = new UserService();

    useEffect(() => {
        userService.getUsers().then(data => setusers(data, console.log(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const hideDeleteuserDialog = () => {
        setDeleteuserDialog(false);
    }

    const hideEditUserPasswordDialog = () => {
        setedituserPassword(false);
    }

    const edituser = (user) => {
        setuser({ ...user });
        setuserDialog(true);
    }

    const confirmDeleteuser = (user) => {
        setuser(user);
        setDeleteuserDialog(true);
    }

    const confirmEditPassword = (user) => {
        setuser(user);
        setedituserPassword(true);
    }

    const deleteuser = () => {
        let _users = users.filter(val => val.email !== user.email);
        setuser(_users);
        userService.deleteUsers(user.email);
        setDeleteuserDialog(false);
        setuser(emptyuser);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        userService.getUsers().then(data => setuser(data));
    }

    const editUser = () => {
        let _users = users.filter(val => val.email !== user.email);
        setuser(_users);
        userService.changePassword(password, users.email)
        console.log(password + " para " + user.email, user.nombre)
        setedituserPassword(false);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Password changed', life: 3000 });
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => confirmEditPassword(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteuser(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h3 className="p-m-0">Manage Users</h3>
        </div>
    );

    const edituserDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideEditUserPasswordDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={editUser} />
        </React.Fragment>
    );

    const deleteuserDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteuserDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteuser} />
        </React.Fragment>
    );

    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />

            <div className="card">

                <DataTable ref={dt} value={users} className='datatable'
                    dataKey="email" paginator rows={10} rowsPerPageOptions={[3, 6, 9]}
                    header={header} emptyMessage="No users found.">
                    <Column className='columndatatable' field="email" header="Email" filter filterPlaceholder='Search by email' sortable></Column>
                    <Column className='columndatatable' field="nombre" header="Nombre" filter filterPlaceholder='Search by name' sortable></Column>
                    <Column className='columndatatable' field="apellido" header="Apellido" filter filterPlaceholder='Search by surname' sortable></Column>
                    <Column className='trashButtom' body={actionBodyTemplate}></Column>

                </DataTable>
            </div>

            <Dialog visible={deleteuserDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteuserDialogFooter} onHide={hideDeleteuserDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {user && <span>Are you sure you want to delete <b>{user.email}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={edituserPassWord} style={{ width: '450px' }} header="Confirm" modal footer={edituserDialogFooter} onHide={hideEditUserPasswordDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {user && <span>Enter the new password for <b>{user.email}</b></span>}
                    <div>
                        <h4>New Password</h4>
                        <InputText type='text' onChange={(e) => setpassword(e.target.value)}></InputText>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default Users;