import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: "",
    };

    handleSubmit = e => {
        e.preventDefault();

        const { pokemonName } = this.state;

        if (pokemonName.trim() === '') {
          toast.error("Введіть ім'я покемона");
          return;
        }

        this.props.handleSubmit(pokemonName);
        this.setState({ pokemonName: '' })
    };

    handleChange = e => {
      this.setState({ pokemonName: e.target.value })
    }

    render() {
        const { pokemonName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="pokemon">
                    Search pokemon:
                    <input type="text" name="pokemon" value={pokemonName} onChange={this.handleChange}/>
                </label>

                <button type="submit">
                    <BsSearch />{" "}
                </button>
            </form>
        );
    }
}
