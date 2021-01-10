import React from 'react'
import { axios } from 'axios';
import { Card } from 'primereact/card';
import Home from '../Home/Home';

class Users extends React.Component {  
    state = {
        users: [],
        markets: [],
        bets: [],
        events: []
      }

     

    render() {  
      return (
        <div className='users'>
          
        </div>
      )
  
    }
  }
  
  export default Users;
  