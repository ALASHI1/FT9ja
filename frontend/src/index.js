 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import axios from 'axios';
import { MaterialUIControllerProvider } from "context";
axios.defaults.baseURL ="https://ft9jabe.herokuapp.com/";



// Material Dashboard 2 React Context Provider


ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
