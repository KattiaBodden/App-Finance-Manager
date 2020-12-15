import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { database } from "../../components/bd";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
//
  const loadDatabase = async () => {
    try {
      const setup = await AsyncStorage.getItem("setup");
      if(!setup){
        //Borrar Tablas
      //await database.dropDatabaseTableAsync();
      //await database.dropCategoriasTableAsync();
      //await database.dropIngresosTableAsync();

      //Crear tablas
      await database.ingresosTableAsync();
      await database.setupDatabaseTableAsync();
      await database.categoriesTableAsync();

      //Llenar Tabla de Categorias
      await database.setupCategoriasAsync();
  
      // Finaliza la carga de la DB
        await AsyncStorage.setItem("setup","yes")
      }
      
     setIsLoadingComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};


export default useDatabase;
