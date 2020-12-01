

import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

// Crear el contexto de las notas
export const MovesContext = createContext({});

export const MovesContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { moves: initialNotes, children } = props;

  // Almacenar los valores en el estado
  const [moves, setMoves] = useState(initialNotes);

  // Cargar u obtener las notas
  useEffect(() => {
    refreshMoves();
  }, []);

  const refreshNotes = () => {
    return database.getMoves(setMoves);
  };

  const addNewMove = (moves) => {
    return database.insertMoves(moves, refreshMoves);
  };

  // Crear el objeto de contexto
  const movesContext = {
    moves,
    addNewMove,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NotesContext.Provider value={movesContext}>
      {children}
    </NotesContext.Provider>
  );
};