import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

export const ContextoCategorias = createContext({});
export const CategoriaContextProvider = (props) => {
 
  const { categorias: initialCategorias, children } = props;
  const [categorias, setCategorias] = useState(initialCategorias);

  useEffect(() => {
    refreshCategorias();
  }, []);

  const refreshCategorias = () => {
    return database.getCategorias(setCategorias);
  };

 

  // Crear el objeto de contexto
  const contextoCategoriasObject = {
    categorias,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ContextoCategorias.Provider value={contextoCategoriasObject}>
      {children}
    </ContextoCategorias.Provider>
  );
};