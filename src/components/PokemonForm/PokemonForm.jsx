import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

export const PokemonForm = ({ handleSubmit }) => {
    const [pokemonName, setPokemonName] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (pokemonName.trim() === "") {
            toast.error("Введіть ім'я покемона");
            return;
        }

        handleSubmit(pokemonName);
        setPokemonName("");
    };

    const handleChange = (e) => {
        setPokemonName(e.target.value);
    };

    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="pokemon">
                Search pokemon:
                <input
                    type="text"
                    name="pokemon"
                    value={pokemonName}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">
                <BsSearch />
            </button>
        </form>
    );
};

export default PokemonForm;