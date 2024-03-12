import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-vertical-timeline-component/style.min.css";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App reff={el} />);
