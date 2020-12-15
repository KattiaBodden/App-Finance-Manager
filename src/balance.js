import React, { Component, useContext, useEffect, useState } from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Card} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { PieChart } from "react-native-chart-kit";
import { ContextoGastos } from "../src/context/movimientosContext";

//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
const state =[{fecha: new Date("2020","06","22")}];

// data del grafico


const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const balance = ({ navigation }) => { 
  const {gastos } = useContext(ContextoGastos);
  var montos = gastos ? gastos.map((gasto)=>(gasto.monto)) : null;
    
    
    var suma = 0;
    montos ? montos.forEach(function(monto){
        suma += monto;
    }):null; 

  const data = [
    {
      name: "Ingresos",
      population: 215,
      color: "#236266",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Gastos",
      population: suma,
      color: "#de3537",
      legendFontColor: "black",
      legendFontSize: 15
    }
  ];
       return (
            <Container style={styles.Fondo}  >
      
                <LinearGradient 
                   colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                   style={styles.LinearGradient}
                   start={{ x: 1, y: 1 }}
                   end={{ x: 1, y: 0 }}> 
                    <Image source={require("../assets/letras.png")} style={styles.logoImage} />
               
                    <Text style={styles.h1}>Balance</Text>
                    <View style={styles.divisor}/>
                   <View style={styles.view}>

                       <PieChart
                            //doughnut={true}
                            data={data}
                            width={width}
                            height={200}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            absolute
                        /> 
                    </View>
                    <View>
                      <Text style={styles.texto}>Movimientos en orden</Text>
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
        backgroundColor: '#31898F',
    },

    h1:{
        fontSize: 33,
        textAlign:"center",
        marginTop: 12,
        color: '#236266',
    },

    divisor:{
        borderBottomColor: '#236266',
        borderBottomWidth: 2,
        width: width * 0.9,
        alignSelf: "center"
    },

    texto: {
        textAlign: "center",
        marginTop: 20,
        color: "white",
        fontSize: 25,
    },

    icono: {
        color: "white",
        fontSize: 35,
        paddingBottom:35
    },

    boton: {
        alignContent:"center",
        backgroundColor: "#31898F",
        borderRadius: 40,
        marginLeft: 290,
        position: "absolute",
        top: 500
    },

    view: {
        backgroundColor: "white",
        marginTop: 15,
    },
    logoImage: {
      width: width * 0.9,
      height: 60,
      alignSelf: "center",
      marginTop: 25,
      marginBottom: 10
    },
 });

export default balance;