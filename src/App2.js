import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

const App2 = () => {
    const [pokemonName, setPokemonName] = useState();

    return (
        <div>
            <PokemonForm handleSubmit={setPokemonName} />
            <ToastContainer position="top-center" autoClose={1000} />

            <PokemonInfo pokemonName={pokemonName} />
        </div>
    );
};

export default App2;
