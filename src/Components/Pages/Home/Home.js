import './Home.css'
import 'primeicons/primeicons.css'
import React from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';



class Home extends React.Component {
  state = {
    users: [],
    markets: [],
    bets: [],
    events: []
  }

  componentDidMount() {
    axios.get('https://localhost:44380/api/Usuarios')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })

    axios.get('https://localhost:44380/api/Mercados')
      .then(res => {
        const markets = res.data;
        this.setState({ markets });
      })

    axios.get('https://localhost:44380/api/Eventos')
      .then(res => {
        const events = res.data;
        this.setState({ events });
      })

    axios.get('https://localhost:44380/api/Apuestas')
      .then(res => {
        const bets = res.data;
        this.setState({ bets });
      })
  }


  render() {
    function titulo(title) {
      return <p className='titleCard'>{title}</p>;
    }

    return (
      <div className='home'>
        <div className="row1">
          <Card title={titulo('Users')} className="CardInfo">
            <hr />
            <p className='cardContent'> {this.state.users.length} <i className="pi pi-user" /></p>
          </Card>
          <Card title={titulo('Markets')} className="CardInfo">
            <hr />
            <p className='cardContent'> {this.state.markets.length} <i className="pi pi-dollar" /></p>
          </Card>
        </div>
        <div className="row1">
          <Card title={titulo('Bets')} className="CardInfo">
            <hr />
            <p className='cardContent'> {this.state.bets.length} <i className="pi pi-money-bill" /></p>
          </Card>
          <Card title={titulo('Events')} className="CardInfo">
            <hr />
            <p className='cardContent'> {this.state.events.length} <i className="pi pi-ticket" /></p>
          </Card>
        </div>
      </div>
    )

  }
}

export default Home;
