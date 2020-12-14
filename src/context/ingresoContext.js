import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

export const ContextoIngresos = createContext({});
export const IngresosContextProvider = (props) => {

    const { ingresos: initialIngresos, children } = props;
    const [ingresos, setIngresos] = useState(initialIngresos);

    useEffect(() => {
        refreshIngresos();
    }, []);

    const refreshIngresos = () => {
        return database.getIngresos(setIngresos);
    };

    const agregarIngreso = async (descripcion,monto) => {
        await database.insertIngresos(descripcion, monto, refreshIngresos);
        return refreshIngresos();
    };

    const contextoIngresosObject = {
        ingresos,
        agregarIngreso,
      };

    return (
        <ContextoIngresos.Provider value={contextoIngresosObject}>
            {children}    
        </ContextoIngresos.Provider>
    );
}