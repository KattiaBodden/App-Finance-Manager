import React from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQLite.openDatabase("financeManager.db");


// Obtener los movimientos del usuario
const getMoves = (setMovesFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from movimientos",
      [],
      (_, { rows: { _array } }) => {
        setNotesFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los movimientos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Movimientos obtenidos");
      }
    );
  });
};

// Insertar movimientos
const insertMoves = (move, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into movimientos (move) values (?)", [move]);
    },
    (_t, error) => {
      console.log("Error al insertar movimiento");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table financeManager");
      },
      (_, result) => {
        resolve(result);
      },
      (_, error) => {
        console.log("Error al eliminar la tabla de movimientos");
        reject(error);
      }
    );
  });
};

// Creación de la tabla de movimientos
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists movimientos (id integer primary key not null, descripcion,fecha,idCategoria )"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

export const database = {
  getMoves,
  insertMoves,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
};
