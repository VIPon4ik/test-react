import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

class App2 extends Component {
  state = {
    pokemonName: '',
  }

  componentDidMount() {
  }

  handleSubmit = pokemonName => {
    if (pokemonName !== this.state.pokemonName) {
      this.setState({ pokemonName });
    }
  }

  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <PokemonForm handleSubmit={this.handleSubmit} />
        <ToastContainer position="top-center" autoClose={1000}/>
        
        <PokemonInfo pokemonName={pokemonName}/>
      </div>
    )
  }
}

export default App2;