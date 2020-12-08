import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("financeManager.db");


// Obtener los gastos del usuario
const getGastos = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

// Obtener los categorias de gastos
const getCategorias = (setCategoriasFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from categorias",
      [],
      (_, { rows: { _array } }) => {
        setCategoriasFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener las categorias");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Categorias obtenidos");
      }
    );
  });
};
// Insertar gastos
const insertGastos = (descripcion,monto,fecha,successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into gastos (descripcion,monto,fecha) values (?,?,?)", [descripcion,monto,fecha]);
    },
    (_t, error) => {
      console.log("Error al insertar gastos");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};


// Borrar la tabla gastos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table gastos");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de gastos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
      
    );
  });
};

// Borrar la tabla categorias
const dropCategoriasTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table categorias");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de gastos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
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
          "create table if not exists gastos (id integer primary key autoincrement, descripcion text not null ,monto numeric ,fecha text not null  )"
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

//Creacion tabla categorias
const categoriesTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists categorias (id integer primary key autoincrement, categoria text not null)"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {

        resolve(success);
        console.log("table creada con exito");

      }
    );
  });
};

// Agrega una gasto por defecto
const setupGastosAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into gastos (descripcion) values (?)", [
          "Primer gasto"
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};


//Insertar categorias de gasto
const setupCategoriasAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into categorias (categoria) values (?)", [
          "Sin Categoria"
         
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar las categorias");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("categorias cargadas ");

        resolve(success);
      }
    );
  });
};
export const database = {
  getGastos,
  getCategorias,
  insertGastos,
  dropDatabaseTableAsync,
  dropCategoriasTableAsync,
  setupDatabaseTableAsync,
  categoriesTableAsync,
  setupGastosAsync,
  setupCategoriasAsync,
};
