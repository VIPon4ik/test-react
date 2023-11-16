import React from "react";
import { useRef } from "react";

const Player = ({ source }) => {
    const playerRef = useRef();
    const play = () => playerRef.current.play();
    const pause = () => playerRef.current.pause();

    return (
        <div>
            <video ref={playerRef} src={source}>
              Srry your browser is shit
            </video>
            <div>
              <button onClick={play} type="button">Play</button>
              <button onClick={pause} type="button">Pause</button>
            </div>
        </div>
    );
};

export default Player;
