import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import "./styles/index.scss";
import { UserProvider } from "./userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <App3 />
    </UserProvider>
);
