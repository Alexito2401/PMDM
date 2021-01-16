import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BetsServive from './BetsService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RadioButton } from 'primereact/radiobutton';
import './bets.css';

const Bets = () => {
    let emptybet = {
        IdEvento: null,
        TipoMercado: null,
        cuota: null,
        dineroApuesta: null,
        emailUsuario: "",
        fecha: "",
        idApuesta: null,
        idMercado: null,
        tipoApuesta: ""
    };

    const [bets, setbets] = useState(null);
    const [events, setevents] = useState(null);
    const [markets, setmarkets] = useState(null);
    const [marketsDialog, setmarketsDialog] = useState(null);
    const [confirmmarketsDialog, setConfirmmarketsDialog] = useState(null);
    const [event, setEvent] = useState(null);
    const [market, setmarket] = useState(null);
    const [confirmmarkets, setnewmarket] = useState(false);
    const [newbetDialog, setnewbetDialog] = useState(false);

    const toast = useRef(null);
    const dt = useRef(null);
    const betservice = new BetsServive();

    useEffect(() => {
        betservice.getBets().then(data => setbets(data, console.log(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        betservice.getEvents().then(data => setevents(data, console.log(data)));
    }, []);

    useEffect(() => {
        betservice.getMarkets().then(data => setmarkets(data, console.log(data)));
    }, []);

    const hideNewbetDialog = () => {
        setnewbetDialog(false);
    }

    const confirmMarketCreateDialog = (event) => {
        setnewmarket(true);
        setEvent(event);
    }

    const hideMarketCreateDialog = () => {
        setnewmarket(false);
    }

    const confirmNewMarketDialog = () => {
        setnewbetDialog(true);
    }

    const marketsdialogtable = () =>{
        setmarketsDialog(true);
    }

    const hidemarketsdialogtable = () =>{
        setmarketsDialog(false);
    }

    const confirmMarketBlockDialog = (market) => {
        setConfirmmarketsDialog(true);
        setmarket(market);
    }

    const hideconfirmMarketBlockDialog= () =>{
        setConfirmmarketsDialog(false);
    }

    const createMarkets = () =>{
        console.log(event.idEvento)
        setnewmarket(false);
        betservice.insertMarkets(event.idEvento);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Markets created', life: 3000 });
    }

    const blockMarket = () => {
        console.log(market.idMercado)
        setConfirmmarketsDialog(false);
        betservice.blockMarkets(market.idMercado);
    }

    const header = (
        <div className='table-header'>
            <h2 className='p-m-0'>Manage bets</h2>
            <Button label="Insert" icon="pi pi-plus" className='header_button' onClick={confirmNewMarketDialog} />
            <Button label="Block" icon="pi pi-lock" className='header_button' onClick={marketsdialogtable}/> 
        </div>
    );

    const confirmNewMarket = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideMarketCreateDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={createMarkets} />
        </React.Fragment>
    );

    const confirmMarketBlock = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideconfirmMarketBlockDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={blockMarket} />
        </React.Fragment>
    );

    const newEventDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideNewbetDialog} />
        </React.Fragment>
    );

    const newMarketBlockDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hidemarketsdialogtable} />
        </React.Fragment>
    );

    const actionBodyTemplateEvent = (rowData) => {
        return (
            <React.Fragment>
                <Button icon='pi pi-plus' className='p-button-rounded p-button-success p-mr-2' onClick={() => confirmMarketCreateDialog(rowData)}/>
            </React.Fragment>
        );
    }

    const actionBodyTemplateMarket = (rowData) => {
        return (
            <React.Fragment>
                <Button icon='pi pi-lock' className='p-button-rounded p-button-success p-mr-2' onClick={() => confirmMarketBlockDialog(rowData)}/>
            </React.Fragment>
        );
    }

    return (
        <div className='datatable-crud-demo'>
            <Toast ref={toast} />
            <div className='card'>

                <DataTable ref={dt} value={bets} className='datatable'
                    dataKey='fecha' paginator rows={10} rowsPerPageOptions={[3, 5, 7]}
                    header={header} emptyMessage='No bets found.'>
                    <Column className='columndatatable' field='idMercado' header='IdMarket' filter filterPlaceholder='Search by Market Id' sortable></Column>
                    <Column className='columndatatable' field='IdEvento' header='IdEvent' filter filterPlaceholder='Search by Event Id' sortable></Column>
                    <Column className='columndatatable' field='emailUsuario' header='Email' filter filterPlaceholder='Search by Email' sortable></Column>
                    <Column className='columndatatable' field='TipoMercado' header='Market type'></Column>
                    <Column className='columndatatable' field='tipoApuesta' header='Bet type'></Column>
                    <Column className='columndatatable' field='cuota' header='Share' sortable></Column>
                </DataTable>


            </div>

            <Dialog visible={newbetDialog} style={{ width: '900px' }} className='Dialog_market' header='Create Markets' modal footer={newEventDialogFooter} onHide={hideNewbetDialog}>
                <div className='confirmation-con'>
                    <DataTable ref={dt} value={events} className='datatable'
                        dataKey='fecha' paginator rows={5} rowsPerPageOptions={[3, 5, 7]}
                        emptyMessage='No events found.'>
                        <Column className='columndatatable' field='idEvento' header='IdEvent' filter filterPlaceholder='Search by Event Id' sortable></Column>
                        <Column className='columndatatable' field='Fecha' header='Date' filter filterPlaceholder='Search by date' sortable></Column>
                        <Column body={actionBodyTemplateEvent}></Column>
                    </DataTable>
                </div>
            </Dialog>

            <Dialog visible={confirmmarkets} style={{ width: '450px' }} header='Confirm' modal footer={confirmNewMarket} onHide={hideMarketCreateDialog}>
                <div className='confirmation-content'>
                    <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                    {event && <span>Are you sure you want to create the markets for event <b>{event.idEvento}</b>?</span>}
                </div>
            </Dialog>


            <Dialog visible={marketsDialog} style={{ width: '900px' }}  header='Block Markets' modal footer={newMarketBlockDialogFooter} onHide={hidemarketsdialogtable}>
                <div className='confirmation-con'>
                    <DataTable ref={dt} value={markets} className='datatable'
                        dataKey='fecha' paginator rows={5} rowsPerPageOptions={[3, 5, 7]}
                        emptyMessage='No markets found.'>
                        <Column field='idMercado' header='Id MArket' filter filterPlaceholder='Search by Event Id' sortable></Column>
                        <Column field='overUnder' header='Over/Under' filter filterPlaceholder='Search by date' sortable></Column>
                        <Column field='coutaOver' header='Quota over' filter filterPlaceholder='Search by date' sortable></Column>
                        <Column field='cuotaUnder' header='Quota under' filter filterPlaceholder='Search by date' sortable></Column>
                        <Column field='bloqueado' header='Block' filter filterPlaceholder='Search by date' sortable></Column>
                        <Column body={actionBodyTemplateMarket}></Column>
                    </DataTable>
                </div>
            </Dialog>

            <Dialog visible={confirmmarketsDialog} style={{ width: '450px' }} header='Confirm' modal footer={confirmMarketBlock} onHide={hideconfirmMarketBlockDialog}>
                <div className='confirmation-content'>
                    <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                    {market && <span>Are you sure you want to create the markets for event <b>{market.idMercado}</b>?</span>}
                </div>
            </Dialog>
        </div>
    );
}

export default Bets;