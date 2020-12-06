import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import mainScreen from "./src/mainScreen"
import pantallaIngresos from "./src/pantallaIngresos"
import pantallaGastos from "./src/pantallaGastos"
import movimientos from "./src/movimientos"
import agregarMovimientos from "./src/AgregarMovimientos"
import balance from "./src/balance"
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDataBase";
import { MovesContextProvider } from "./src/context/movimientosContext";

const Stack = createStackNavigator();

export default function App() {

   // Prevenir que la pantalla de splash se oculte
   SplashScreen.preventAutoHideAsync();

   const isLoadingComplete = useDatabase();
 
   // Ocutar la pantalla de splash
   if (isLoadingComplete) SplashScreen.hideAsync();

   //falta poner la etiqueta movesContextProvider , revisar github
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="mainScreen" headerMode = 'none'>
      <Stack.Screen name="mainScreen" component={mainScreen} />
      <Stack.Screen name="movimientos" component={movimientos} />
      <Stack.Screen name="agregarMovimientos" component={agregarMovimientos} />
      <Stack.Screen name="pantallaIngresos" component={pantallaIngresos} />
      <Stack.Screen name="pantallaGastos" component={pantallaGastos} />
      <Stack.Screen name="balance" component={balance} />
    </Stack.Navigator>
      
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
