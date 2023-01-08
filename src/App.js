import React from "react";
import { Header } from "./componentes/Header/Index";
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom";
import  {Paginas}  from "./componentes/Paginas";
import { DataProvider } from "./componentes/Context/Dataprovider";
import { Carrito } from "./componentes/Carrito/Index";

function App() {
  return (
    <DataProvider>
      <div className="App">
      <Router>
        <Header/>
        <Carrito/>
        <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
