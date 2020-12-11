import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Card,List,ListItem,Fab,Left} from "native-base";
import { StyleSheet, Text,Dimensions, FlatList} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
import { ContextoGastos } from "../src/context/movimientosContext";
import { DateTime } from "luxon";
import { format} from 'date-fns';

const { width, height } = Dimensions.get("window");

const pantallaGastos= ({ navigation }) => { 
    var dateFormat = require("dateformat");

    const { gastos } = useContext(ContextoGastos);
    console.log(gastos);

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
                            <List>
                                {gastos
                                    ? gastos.map((gasto) => (
                                        <ListItem key={gasto.id.toString()}>
                                            <Left><Text>{gasto.descripcion}</Text></Left> 
                                            <Right><Text> {gasto.monto}</Text></Right>  
 
                                        </ListItem>
                                    ))
                                    : null}
                                </List>
                        </Card>
                        <Fab
                            active={true}
                            position="bottomRight"
                            style={{ backgroundColor: "#ff0023" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarGastos")
                            }}
                            >
                            <Icon name="plus" type="FontAwesome" />
                            </Fab>
                     


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