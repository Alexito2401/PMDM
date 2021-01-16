import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EventService from './EventService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import './events.css';

const Events = () => {
    let emptyevent = {
        idEvento: null,
        local: '',
        visitante: '',
        fecha: '',
    };

    const [events, setevents] = useState(null);
    const [deleteeventDialog, setDeleteeventDialog] = useState(false);
    const [editeventDate, setediteventDate] = useState(false);
    const [neweventDialog, setnewEventDialog] = useState(false);
    const [date, setDate] = useState(null);
    const [local, setLocal] = useState(null);
    const [visitor, setVisitor] = useState(null);
    const [event, setevent] = useState(emptyevent);
    const toast = useRef(null);
    const dt = useRef(null);
    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setevents(data, console.log(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const hideDeleteeventDialog = () => {
        setDeleteeventDialog(false);
    }

    const hideNeweventDialog = () => {
        setnewEventDialog(false);
    }

    const hideEditeventDateDialog = () => {
        setediteventDate(false);
    }

    const confirmDeleteevent = (event) => {
        setevent(event);
        setDeleteeventDialog(true);
    }

    const confirmEditDate = (event) => {
        setevent(event);
        setediteventDate(true);
    }

    const confirmNewEvent = (event) => {
        setevent(event);
        setnewEventDialog(true);
    }

    const newEvent = () =>{
        setnewEventDialog(false);
        var n = date.toString();
        console.log(local,visitor,n);
        eventService.postEvent(local,visitor,n)
    }

    const deleteevent = () => {
        let _events = events.filter(val => val.Id !== event.Id);
        setevent(_events);
        eventService.deleteEvents(event.idEvento);
        setDeleteeventDialog(false);
        setevent(emptyevent);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'event Deleted', life: 3000 });
    }

    const editevent = () => {
        if (date == null) {
            toast.current.show({severity: 'error', summary: 'Error Message', detail: 'Date Null'});
        } else{
            let _events = events.filter(val => val.idEvento !== event.idEvento);
            setevent(_events);
            console.log('La nueva fecha para el evento '+event.idEvento+' es '+ date)
            var n = date.toString();
            n= n.substr(4,21);
            eventService.changeDateEvents(n, event.idEvento);
            setediteventDate(false);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Date changed', life: 3000 });
        }
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon='pi pi-pencil' className='p-button-rounded p-button-success p-mr-2' onClick={() => confirmEditDate(rowData)} />
                <Button icon='pi pi-trash' className='p-button-rounded p-button-warning' onClick={() => confirmDeleteevent(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className='table-header'>
            <h2 className='p-m-0'>Manage events</h2>
            <Button label="Insert" icon="pi pi-plus" onClick={() => confirmNewEvent()}/>
        </div>
    );

    const editeventDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideEditeventDateDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={editevent} />
        </React.Fragment>
    );

    const neweventDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideNeweventDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={newEvent} />
        </React.Fragment>
    );

    const deleteeventDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideDeleteeventDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={deleteevent} />
        </React.Fragment>
    );

    return (
        <div className='datatable-crud-demo'>
            <Toast ref={toast} />
            <div className='card'>

                <DataTable ref={dt} value={events} className='datatable'
                    dataKey='fecha' paginator rows={10} rowsPerPageOptions={[3,5,7]}
                    header={header} emptyMessage='No events found.'>
                    <Column className='columndatatable' field='Local' header='Local' filter filterPlaceholder='Search by Local Team ' sortable></Column>
                    <Column className='columndatatable' field='Visitante' header='Visitante' filter filterPlaceholder='Search by Visiting team' sortable></Column>
                    <Column className='columndatatable' field='Fecha' header='Fecha' filter filterPlaceholder='Search by date' sortable></Column>
                    <Column className='trashButtom' body={actionBodyTemplate}></Column>

                </DataTable>
            </div>

            <Dialog visible={deleteeventDialog} style={{ width: '450px' }} header='Delete' modal footer={deleteeventDialogFooter} onHide={hideDeleteeventDialog}>
                <div className='confirmation-content'>
                    <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                    {event && <span>Are you sure you want to delete this event?</span>}
                </div>
            </Dialog>

            <Dialog visible={editeventDate} style={{ width: '450px' }} header='Edit Date' modal footer={editeventDialogFooter} onHide={hideEditeventDateDialog}>
                <div className='confirmation-con'>
                    <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                    <h4>Enter new date for the event</h4>
                    <div>
                    {event && <Calendar className='p-datepicker' id='time' dateFormat='dd/mm/yy' value={date} onChange={(e) => setDate(e.value)} showTime showSeconds />}
                    </div>
                </div>
            </Dialog>

            <Dialog visible={neweventDialog} style={{ width: '450px' }} header='New Event' modal footer={neweventDialogFooter} onHide={hideNeweventDialog}>
                <div className='confirmation-con'>
                    <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                    <h3>Equipo Local</h3>
                    <InputText onChange={(e) => setLocal(e.target.value)}></InputText>
                    <h3>Equipo Visitatnte</h3>
                    <InputText onChange={(e) => setVisitor(e.target.value)}></InputText>
                    <h3>Fecha del evento</h3>
                    <input className='input_datetime' type='datetime-local' onChange={(e) => setDate(e.target.value)}></input>
                </div>
            </Dialog>
        </div>
    );
}

export default Events;