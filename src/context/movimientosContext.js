

import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

// Crear el contexto de las notas
export const ContextoGastos = createContext({});
export const GastosContextProvider = (props) => {
 
  const { gastos: initialGastos, children } = props;
  const [gastos, setGastos] = useState(initialGastos);

  useEffect(() => {
    refreshGastos();
  }, []);

  const refreshGastos = () => {
    return database.getGastos(setGastos);
  };

  const agregarGasto = (descripcion,monto,fecha) => {
    return database.insertGastos(descripcion,monto,fecha, refreshGastos);
  };

  // Crear el objeto de contexto
  const contextoGastosObject = {
    gastos,
    agregarGasto,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ContextoGastos.Provider value={contextoGastosObject}>
      {children}
    </ContextoGastos.Provider>
  );
};