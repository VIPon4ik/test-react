import React, { Component } from "react";
import axios from "axios";
import api from "../../api/pokemonApi";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon/";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        isLoading: false,
        error: null,
        status: "idle",
    };

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            this.setState({ status: "pending", pokemon: null, error: null });
            try {
                const pokemon = await api.fetchPokemon(nextName);
                this.setState({ pokemon, status: "fullfilled" });
            } catch (error) {
                this.setState({
                    error: `Покемона з ім'ям ${nextName} не знайдено`,
                    status: "rejected",
                });
            }
        }
    }

    render() {
        const { pokemonName } = this.props;
        const { status, pokemon, error } = this.state;

        if (status === "idle") {
            return <div>Введіть ім'я покемона</div>;
        }

        if (status === "pending") {
            return <p>Loading ...</p>;
        }

        if (status === "rejected") {
            return <p>Error {error}</p>;
        }

        if (status === "fullfilled") {
            return (
                <div>
                    <img
                        width="240"
                        src={
                            pokemon.sprites.other["official-artwork"]
                                .front_default
                        }
                    />
                    <p>{pokemonName}</p>
                </div>
            );
        }
    }
}
