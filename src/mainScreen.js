import React, { Component, useEffect, useState } from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import movimientos from "./movimientos" 

//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
const state =[{fecha: new Date("2020","06","22")}];

const mainScreen = ({ navigation }) => { 
  
       return (
            <Container style={styles.Fondo}  >
                <Header  style={styles.header} >
                 
                </Header>
                 <LinearGradient 
                    colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                    style={styles.LinearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}> 
                    <View >
                        <Text style={styles.textoTitulo}>Bienvenido! </Text> 
                        <Button  style={styles.botonIngresos} onPress={() => navigation.navigate("pantallaIngresos")}> 
                          <MaterialIcons name="attach-money" size={24} color="black" />
                            <Text style={styles.textoBotones}>Ingresos</Text>
                        </Button> 
                        <Button  style={styles.botonGastos} onPress={() => navigation.navigate("pantallaGastos")}>
                          <MaterialIcons name="money-off" size={24} color="black" />
                            <Text style={styles.textoBotones}>Gastos</Text>
                        </Button> 
                        <Button  style={styles.botonMovimientos} onPress={() => navigation.navigate("movimientos")}>
                          <MaterialIcons name="compare-arrows" size={24} color="black" />
                            <Text style={styles.textoBotones}>Movimientos</Text>
                        </Button>
                        <Button  style={styles.botonBalance}>
                          <MaterialIcons name="account-balance" size={24} color="black" />
                            <Text style={styles.textoBotones}>Balance</Text>
                        </Button> 

                </View>

            </LinearGradient>

         </Container>
        );                  
}

const styles = StyleSheet.create({
  Fondo: {
    width: width,
    height: height,
    },
  
    LinearGradient: {
      height: height,
      width: width
      
    },
    header: {
        backgroundColor: '#3CCCD6',
      },

 
    botonIngresos:{
      width:190,
      height:60,
      backgroundColor:"#ffffff",
      marginTop:50,
      alignSelf:"center",
      borderRadius:26,
      alignContent:"center",
      justifyContent:"center",

  },
  botonGastos:{
    width:190,
    height:60,
    backgroundColor:"#ffffff",
    marginTop:50,
    alignSelf:"center",
    borderRadius:26,
    alignContent:"center",
    justifyContent:"center",

},
botonMovimientos:{
  width:190,
  height:60,
  backgroundColor:"#ffffff",
  marginTop:50,
  alignSelf:"center",
  borderRadius:26,
  alignContent:"center",
  justifyContent:"center",

}  ,
botonBalance:{
  width:190,
  height:60,
  backgroundColor:"#ffffff",
  marginTop:50,
  alignSelf:"center",
  borderRadius:26, 
  alignContent:"center",
  justifyContent:"center",

},
textoBotones:{
  fontWeight:"bold",
  fontSize:20,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:20,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  marginLeft:40,
}
 });

export default mainScreen;