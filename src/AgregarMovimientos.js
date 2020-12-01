import React, { Component, useEffect, useState } from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Picker} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
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

export default class movimientos extends Component  { 
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          selected3:undefined
        };
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      onValueChange2(value:string) {
        this.setState({
          selected2: value

        });
        
      }
      onValueChange3(value:string) {
        this.setState({
          selected3: value

        });
    }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
        render(){
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
                            <Text style={styles.textoTitulo}>Agregar Movimientos </Text> 
                            <View style={styles.viewStyle}>
                            <Item style={styles.itemStyle} >
                                <Input placeholder='Descripción'/>
                            </Item>
                            <Item style={styles.itemStyle} >
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                <Input placeholder='Monto'/>
                            </Item>
                            <Button style={styles.botonCategorias}>

                                <Picker
                                    mode="dropdown"
                                    style={{ width: undefined }}
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Sin Categoria" value="key0" />
                                    <Picker.Item label="Alimentación" value="key1" />
                                    <Picker.Item label="Cuentas y Pagos" value="key2" />
                                    <Picker.Item label="Casa" value="key3" />
                                    <Picker.Item label="Transporte" value="key4" />
                                    <Picker.Item label="Ropa" value="key5" />
                                    <Picker.Item label="Salud e Higiene" value="key6" />
                                    <Picker.Item label="Diversion" value="key7" />
                                    <Picker.Item label="Otros Gastos" value="key8" />




                                </Picker>
                            </Button>
                            <Button style={styles.botonCategorias} >

                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                                />  
                            
                            </Button>
                            <Button style={styles.botonCategorias}>

                                <Picker
                                    mode="dropdown"
                                    style={{ width: undefined }}
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected3}
                                    onValueChange={this.onValueChange3.bind(this)}
                                >
                                    <Picker.Item label="Gasto" value="key0" />
                                    <Picker.Item label="Ingreso" value="key1" />
                                   
                                </Picker>
                            </Button>
                            <Button style={styles.botonCrear} rounded>
                                <Text style={styles.textoBotones}>
                                    Crear
                                </Text>    
                            </Button>
                            </View>
                        </View>
    
                </LinearGradient>
    
             </Container>
            );                  
        }
      
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
  marginTop:10,
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

