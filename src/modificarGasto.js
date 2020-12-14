import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon, Right,Button,Picker,DatePicker,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
//import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import {ContextoGastos} from "../src/context/movimientosContext";
import {Fontisto} from '@expo/vector-icons'; 
const { width, height } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons'; 
import * as Font from "expo-font";


 const modificarGasto  = ({ route,navigation }) =>{ 
          const { id } = route.params;
          const [newDescription, setNewDescription] = useState(null);
          const [newMonto, setNewMonto] = useState(null);
         
          const [fontsLoaded, setFontsLoaded] = useState(false);
          const [errorDescripcion, setErrorDescripcion] = useState(false);
          const { gasto, getGastoId ,modificarGastos} = useContext(ContextoGastos);
          console.log(id);

          
          useEffect(() => {
            const loadFontsAsync = async () => {
              await Font.loadAsync({
                Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
              }).then(() => {
                setFontsLoaded(true);
              });
            };
        
            loadFontsAsync();
          }, []);
         
          // Ejecutar el efecto cuando el valor de la nota cambie
          useEffect(() => {
            const getNote = () => {
              getGastoId(id);
            };
            getNote();
                if (gasto.length) {
                setNewDescription(gasto[0].descripcion);
          
                console.log(setNewDescription);
              }
            }, [id, gasto]);

          const updateGasto = async () => {

             await modificarGastos(newDescription,newMonto,id);
              navigation.goBack();

                    
          };

          if (!fontsLoaded)
          return (
            <Content contentContainerStyle={styles.content}>
              <Spinner color="blue" />
            </Content>
          );
          console.log(gasto);

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
                            <Text style={styles.textoTitulo}> Moficar Gastos </Text> 
                            <View style={styles.viewStyle}>
                            <Item  style={errorDescripcion ? styles.inputError : styles.itemStyle}
 >
                                <Input 
                                value={newDescription}
                                onChangeText={setNewDescription}
                                placeholder='Descripción'/>
                               
                            </Item>
                            
                            <Item style={errorDescripcion ? styles.inputError : styles.itemStyle} >
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                <Input  placeholder='Monto'
                                value={newMonto}
                                  onChangeText={setNewMonto}/>
                            </Item>
                            
                            

                            <Button style={styles.botonCrear} rounded onPress={updateGasto}>
                              <Text style={styles.textoBotones}>
                                Modificar
                              </Text>    
                            </Button>
                            </View>
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
    inputError: {
      borderColor: "red",
    },
    header: {
        backgroundColor: '#3CCCD6',
      },

 
    botonCrear:{
      width:160,
      height:60,
      alignSelf:"center",
      marginTop:60,
      backgroundColor:"#FFFFFF",
      justifyContent:"center",
      alignContent:"center"
  },
  
textoBotones:{
  fontWeight:"bold",
  fontSize:25,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:20,
  color:"#FFFFFF",
  fontSize:30,
  fontWeight:"bold",
  marginLeft:45,
},
itemStyle:{
    marginTop:20,
},
viewStyle:{
    width:350,
    height:500,
    alignSelf:"center"
},
botonCategorias:{
    backgroundColor:"transparent",
    marginTop:30,
    width:"auto",
}
 });

export default modificarGasto;