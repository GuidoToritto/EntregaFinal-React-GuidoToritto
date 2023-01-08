import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();

  useEffect(() => {
    productos.forEach((producto) => {
      console.log(productos.id, parseInt(params.id));
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <Link to={`/productos`} className="nuevo"> Atrás </Link>
            <div className="size">
              <select placeholder="size">
                <option value="1">37</option>
                <option value="1">38</option>
                <option value="1">39</option>
                <option value="1">40</option>
                <option value="1">41</option>
                <option value="1">42</option>
                <option value="1">43</option>
                <option value="1">44</option>
                <option value="1">45</option>
              </select>
              <p>Talle</p>
            </div>
          </div>

          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          <img src={detalle.image} alt={detalle.title} width="50%" />

          <div className="description">
            <p>
              <b>descrition: </b> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis excepturi assumenda dignissimos dolor
              magni voluptatem obcaecati reprehenderit earum, corporis atque
              temporibus asperiores nobis aspernatur itaque omnis amet adipisci.
              Culpa, accusantium.{" "}
              <div className="br">
                {" "}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, officiis! Sunt asperiores rem qui possimus, et culpa,
                illum, officia vero corporis voluptate ex aliquid impedit aut
                vel eum vitae debitis!
              </div>
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      }
    </>
  );
};
