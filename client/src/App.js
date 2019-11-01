import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';

class App extends Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res.data)
        this.setState({
          playerData: res.data
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.playerData.map((player, id) => {
          return (
            <PlayerCard player={player} key={player.id}/>
          )
        })}
      </div>
    );
  }
}

export default App;
