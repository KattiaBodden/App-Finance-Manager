import React, { Component, useEffect, useState } from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import agregarMovimiento from "../src/AgregarMovimientos"
//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
const state =[{fecha: new Date("2020","06","22")}];
const moves = [
    {movimiento: "entrada"},
    {movimiento: "salida"},
];

const movimientos = ({ navigation }) => { 
  
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
                        <Text style={styles.textoTitulo}>Movimientos </Text> 
                      
                                <View>
                                    <Text>{moves.movimiento}</Text>
                                </View>
                              
                        <TouchableOpacity style={styles.botonAgregar} onPress={() => navigation.navigate("agregarMovimientos")} >
                            <FontAwesome5 name="plus" size={40} color="white" />
                        </TouchableOpacity>
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

 
    botonAgregar:{
      width:70,
      height:60,
      alignSelf:"flex-end",
      marginTop:560,
  },
  
textoBotones:{
  fontWeight:"bold",
  fontSize:20,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:10,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  marginLeft:73,
}
 });

 export default movimientos;