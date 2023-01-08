import React from 'react'
import {Routes, Route} from "react-router-dom";
import {ProductosLista} from "./Productos/Index";
import { Inicio } from './Inicio/Index';
import { ProductoDetalles } from './Productos/ProductoDetalles';

export const Paginas = () => {
  return (
    <section>
      <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route path='/productos' element={<ProductosLista/>}/>
      <Route path='/producto/:id' element={<ProductoDetalles/>}/>
      </Routes>
    </section>
  )
}
