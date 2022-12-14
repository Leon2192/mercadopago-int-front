import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({
  categoria,
  imagen,
  imagen2,
  precio,
  nombre,
  stock,
  id,
  descripcion,
  tamano,
  compatibilidad,
  conexion,
}) => {
  const back = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <div className="stylingItemDetail">
        <div className="card stylingCard_ItemDetail">
          <h6>CATEGORIA: {categoria}</h6>
          <img
            src="https://i.postimg.cc/kg0v2jTg/images.jpg"
            className="imgItemDetail"
            alt=""
          />
          {/* <p className="card-title">{nombre}</p> */}
          <div className="card-body">
            <span className="btn btn-danger disabled">
              $ {precio} <p className="titleSmall">IVA INCLUIDO</p>
            </span>
            <div className="imgItemDetail">
              <img
                src="https://i.postimg.cc/kg0v2jTg/images.jpg"
                className="imgDetail"
                alt=""
              />
              {imagen2 ? (
                <img
                  src="https://i.postimg.cc/kg0v2jTg/images.jpg"
                  className="imgDetail"
                  alt=""
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="detalleProducto">
            <h1 className="hOneItemDet">{nombre}</h1>
            <p className="pStyling">Lo que tenés que saber de este producto</p>
            <ul className="descripcionFont">
              <li>
                <p> - {descripcion}</p>
              </li>
              <li>{tamano ? <p> - DIMENSIONES: {tamano}</p> : null}</li>
              <li>
                {compatibilidad ? (
                  <p> - COMPATIBILIDAD: {compatibilidad} </p>
                ) : null}
              </li>
              <li>{conexion ? <p> - CONEXION: {conexion} </p> : null}</li>
            </ul>
            <hr />
            <div className="stylingShop">
              <Button>STOCK DISPONIBLE</Button>
              <hr />
              <Link to="/" className="m-1 btn btn-info btn-sm">
                {" "}
                IR A INICIO{" "}
              </Link>
              <button className="btn btn-sm btn-danger" onClick={back}>
                {" "}
                VOLVER
              </button>
              <ItemCount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
