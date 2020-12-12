import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Card,List,ListItem,Fab,Left} from "native-base";
import { StyleSheet, Text,Dimensions, FlatList} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
import { ContextoGastos } from "../src/context/movimientosContext";
import {ContextoCategorias} from "../src/context/categoriasContext"
import { DateTime } from "luxon";
import { format} from 'date-fns';
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const pantallaGastos= ({ navigation }) => { 

    const {gastos,gastosVivienda,gastosTransporte,gastosSalud,gastosEntretenimiento,gastosVestuario,gastosEducacion,gastosOtros} = useContext(ContextoGastos);
    var montos = gastos.map((gasto)=>(gasto.monto));
    var suma = 0;
    montos.forEach(function(monto){
        suma += monto;
    });
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
                           <ScrollView>
                              <List>
                                 <ListItem itemDivider>
                                     <Text>Alimentacion</Text>
                                 </ListItem>   
                                {gastos
                         
                                    ? gastos.map((gasto) => (
                                        <ListItem key={gasto.id.toString()}>
                                            <Left><Text>{gasto.descripcion}</Text></Left> 
                                            <Right><Text> {gasto.monto}</Text></Right>  
 
                                        </ListItem>
                                    ))
                                    : null}
                                 <ListItem itemDivider>
                                     <Text>Vivienda</Text>
                                 </ListItem>
                                 {gastosVivienda
                         
                                    ? gastosVivienda.map((vivienda) => (
                                        <ListItem key={vivienda.id.toString()}>
                                            <Left><Text>{vivienda.descripcion}</Text></Left> 
                                            <Right><Text> {vivienda.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}

                                <ListItem itemDivider>
                                     <Text>Trasporte</Text>
                                 </ListItem>
                                 {gastosTransporte
                         
                                    ? gastosTransporte.map((transporte) => (
                                        <ListItem key={transporte.id.toString()}>
                                            <Left><Text>{transporte.descripcion}</Text></Left> 
                                            <Right><Text> {transporte.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null} 

                                <ListItem itemDivider>
                                     <Text>Salud</Text>
                                 </ListItem>
                                 {gastosSalud
                         
                                    ? gastosSalud.map((salud) => (
                                        <ListItem key={salud.id.toString()}>
                                            <Left><Text>{salud.descripcion}</Text></Left> 
                                            <Right><Text> {salud.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}  

                                 <ListItem itemDivider>
                                     <Text>Entretenimiento</Text>
                                 </ListItem>
                                 {gastosEntretenimiento
                         
                                    ? gastosEntretenimiento.map((entretenimiento) => (
                                        <ListItem key={entretenimiento.id.toString()}>
                                            <Left><Text>{entretenimiento.descripcion}</Text></Left> 
                                            <Right><Text> {entretenimiento.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}    


                                <ListItem itemDivider>
                                    <Text>Vestuario</Text>
                                 </ListItem>
                                 {gastosVestuario
                         
                                    ? gastosVestuario.map((vestuario) => (
                                        <ListItem key={vestuario.id.toString()}>
                                            <Left><Text>{vestuario.descripcion}</Text></Left> 
                                            <Right><Text> {vestuario.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}     

                                  <ListItem itemDivider>
                                     <Text>Educacion</Text>
                                 </ListItem>
                                 {gastosEducacion
                         
                                    ? gastosEducacion.map((educacion) => (
                                        <ListItem key={educacion.id.toString()}>
                                            <Left><Text>{educacion.descripcion}</Text></Left> 
                                            <Right><Text> {educacion.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}         

                                <ListItem itemDivider>
                                     <Text>Otros</Text>
                                 </ListItem>
                                 {gastosOtros
                         
                                    ? gastosOtros.map((otros) => (
                                        <ListItem key={otros.id.toString()}>
                                            <Left><Text>{otros.descripcion}</Text></Left> 
                                            <Right><Text> {otros.monto}</Text></Right>  

                                        </ListItem>
                                    ))
                                    : null}      
                                </List>

                                       
                              
                                 
                            </ScrollView>
                            <View>
                                <Text style={styles.textoTotal}>Total: {suma}</Text>
                            </View>
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
    },
    textoTotal:{
        fontWeight : "bold",
        textAlign:"center",
        fontSize:20
    },
 });

export default pantallaGastos;