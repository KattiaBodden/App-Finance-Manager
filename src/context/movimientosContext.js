

import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

// Crear el contexto de las notas
export const ContextoGastos = createContext({});
export const GastosContextProvider = (props) => {
 
  const { gastos: initialGastos, children } = props;
  const [gastos, setGastos] = useState(initialGastos);
 
  const { gastosVivienda: initialGastosVivienda, children2 } = props;
  const [gastosVivienda, setGastosVivienda] = useState(initialGastosVivienda);

  const { gastosTrasporte: initialGastosTrasporte, children3 } = props;
  const [gastosTrasporte, setGastosTransporte] = useState(initialGastosTrasporte);

  const { gastosSalud: initialGastosSalud, children4 } = props;
  const [gastosSalud, setGastosSalud] = useState(initialGastosSalud);

  const { gastosEntretenimiento: initialGastosEntretenimiento, children5 } = props;
  const [gastosEntretenimiento, setGastosEntretenimiento] = useState(initialGastosEntretenimiento);

  const { gastosVestuario: initialGastosVestuario, children6 } = props;
  const [gastosVestuario, setGastosVestuario] = useState(initialGastosVestuario);
  
  const { Educacion: initialGastosEducacion, children7 } = props;
  const [gastosEducacion, setGastosEducacion] = useState(initialGastosEducacion);
  
  const { gastosOtros: initialGastosOtros, children8 } = props;
  const [gastosOtros, setGastosOtros] = useState(initialGastosOtros);

  useEffect(() => {
    refreshGastos();
    refreshGastosVivienda();
    refreshGastosTransporte();
    refreshGastosSalud();
    refreshGastosEntretenimiento();
    refreshGastosVestuario();
    refreshGastosEducacion();
    refreshGastosOtros();
    
  }, []);
  
  const refreshGastos = () => {
    return database.getGastosAlimentacion(setGastos);
  };
  const refreshGastosVivienda = () => {
    return database.getGastosVivienda(setGastosVivienda);
  };

  const refreshGastosTransporte = () => {
    return database.getGastosTransporte(setGastosTransporte);
  };

  const refreshGastosSalud = () => {
    return database.getGastosSalud(setGastosSalud);
  };

  const refreshGastosEntretenimiento = () => {
    return database.getGastosEntretenimiento(setGastosEntretenimiento);
  };

  const refreshGastosVestuario = () => {
    return database.getGastosVestuario(setGastosVestuario);
  };

  const refreshGastosEducacion = () => {
    return database.getGastosEducacion(setGastosEducacion);
  };

  const refreshGastosOtros = () => {
    return database.getGastosOtrosGastos(setGastosOtros);
  };

  const agregarGasto = async (descripcion,monto,idCategoria) => {
    await database.insertGastos(descripcion,monto,idCategoria, refreshGastos);
    return refreshGastos();
  };

  // Crear el objeto de contexto
  const contextoGastosObject = {
    gastos,
    gastosVivienda,
    gastosTrasporte,
    gastosSalud,
    gastosEntretenimiento,
    gastosVestuario,
    gastosEducacion,
    gastosOtros,
    agregarGasto,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ContextoGastos.Provider value={contextoGastosObject}>
      {children}
      {children2}
      {children3}
      {children4}

    </ContextoGastos.Provider>
  );
};