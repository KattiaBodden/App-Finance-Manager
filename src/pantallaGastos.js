import React, { Component, useEffect, useState } from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Card} from "native-base";
import { StyleSheet, Text,Dimensions, FlatList} from "react-native";
import { NavigationContainer} from '@react-navigation/native';

//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
const state =[{fecha: new Date("2020","06","22")}];

const pantallaGastos= ({ navigation }) => { 
  
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
                       <Text style={styles.h1}>Gastos</Text>
                       <View style={styles.divisor}/>
                       
                       <Card style={styles.lista}>
                            <Text style={styles.texto} >Aqui va el listado de gastos</Text>
                        </Card>
                        
                      <Button style={styles.boton}>
                        <Icon name="add" style={styles.icono}></Icon>
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
        marginTop: 10,
    },

    lista:{
        backgroundColor:"white",
        height: height * 0.75,
        width: width * 0.9,
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 8
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
    }
 });

export default pantallaGastos;