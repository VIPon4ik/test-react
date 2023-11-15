import React, { useState } from "react";
import { act } from "react-dom/test-utils";

export default function ColorPicker({ options }) {
    const [activeColorIndex, setactiveColorIndex] = useState(0);

    const handleClick = (index) => {
        setactiveColorIndex(index);
    };

    const { label } = options[activeColorIndex];
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid black",
                width: "400px",
            }}
        >
            <h1>Color Picker</h1>
            <p>Вибраний колір: {label}</p>

            <ul style={{ display: "flex", gap: "10px", listStyle: 'none' }}>
                {options.map(({ color }, index) => {
                    return (
                        <li
                            key={index}
                            style={{
                                width:
                                    index === activeColorIndex
                                        ? "50px"
                                        : "40px",
                                height:
                                    index === activeColorIndex
                                        ? "50px"
                                        : "40px",
                                backgroundColor: color,
                                marginBottom: "4px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                            onClick={() => handleClick(index)}
                        ></li>
                    );
                })}
            </ul>
        </div>
    );
}
