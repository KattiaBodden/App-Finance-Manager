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
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="mainScreen" headerMode = 'none'>
      <Stack.Screen name="mainScreen" component={mainScreen} />
      <Stack.Screen name="movimientos" component={movimientos} />
      <Stack.Screen name="agregarMovimientos" component={agregarMovimientos} />
      <Stack.Screen name="pantallaIngresos" component={pantallaIngresos} />
      <Stack.Screen name="pantallaGastos" component={pantallaGastos} />
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
