import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from './components/Carrito';

function App() {

  //Crear listado de productos (Nuestro State)
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa reactJS', precio: 50},
    { id: 2, nombre: 'Camisa nodeJS', precio: 60},
    { id: 3, nombre: 'Camisa AngularJS', precio: 40},
    { id: 4, nombre: 'Camisa VueJS', precio: 80}
  ]);

  //State para un carrito de compras

  const [ carrito, agregarProducto ] = useState([])





  //Obtener Fecha

  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      <Header 
        titulo="Tienda Virtual"
       />


      <h2>Lista de Productos</h2>
      {productos.map(producto => (
        <Producto 
          productos={productos}
          producto={producto}
          key={producto.id}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
        )
      )}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
