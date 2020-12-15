import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon, Right,Button,Picker,DatePicker,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions,Image} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
//import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import {ContextoGastos} from "../src/context/movimientosContext";
import {Fontisto} from '@expo/vector-icons'; 
const { width, height } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons'; 
import {ContextoCategorias} from "../src/context/categoriasContext"
import * as Font from "expo-font";

 const AgregarGastos  = ({ navigation }) =>{ 

          const {categorias} = useContext(ContextoCategorias);
          const [descripcion, setDescripcion] = useState("");
          const [monto, setMonto] = useState("");
          const [categoria,setCategoria] = useState("");
          const [fecha, setFecha] = useState(new Date());
          const contextoGastos = useContext(ContextoGastos);
          const { agregarGasto, refreshGastos } = contextoGastos;
          const [fontsLoaded, setFontsLoaded] = useState(false);
          const [enableSave, setEnableSave] = useState(true);
          const [errorDescripcion, setErrorDescripcion] = useState(false);



          
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
              if (descripcion) setEnableSave(false);
              else setEnableSave(true);
            }, [descripcion]);


          const handlerNewGasto = async () => {

            if (descripcion , monto) {
             await agregarGasto(descripcion,monto,categoria,refreshGastos);
              navigation.goBack();
              
            }
           
            else {
              setErrorDescripcion(true);
            }         
          };

          if (!fontsLoaded)
          return (
            <Content contentContainerStyle={styles.content}>
              <Spinner color="blue" />
            </Content>
          );
          console.log(categorias);

            return (
                <Container style={styles.Fondo}  >
                    <Header  style={styles.header} >
                      <Image source={require("../assets/logo1.jpg")} style={styles.logoImage} />
                    </Header>
                     <LinearGradient 
                        colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                        style={styles.LinearGradient}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}> 
                        <View >
                            <Text style={styles.textoTitulo}> Agregar Gastos </Text> 
                            <View style={styles.viewStyle}>
                            <Item  style={errorDescripcion ? styles.inputError : styles.itemStyle}
 >
                                <Input 
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholder='Descripción'/>
                               
                            </Item>
                            
                            <Item style={errorDescripcion ? styles.inputError : styles.itemStyle} >
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                <Input  placeholder='Monto'
                                 value={monto}
                                 onChangeText={setMonto}/>
                            </Item>
                            
                            <Item>
                              <AntDesign name="select1" size={24} color="black" />            
                                <Picker
                                    mode="dropdown"
                                    placeHolderText="Fecha"
                                    label="Basic example"
                                    selectedValue={categoria}
                                    onValueChange={ (item) => {
                                      setCategoria(item)
                                    }}
                                    animateYearScrolling
                                    iosHeader="Categorias"
                                    
                                  >
                                    {
                                      categorias ? categorias.map((categoria)=>{
                                        return(
                                          <Picker.Item key={categoria.id.toString()} label={categoria.categoria} value={categoria.id}/>
                                        )
                                      }

                                      )
                                    : null
                                    }
                                   
                                  </Picker>
                            </Item>

                            <Button style={styles.botonCrear} rounded onPress={handlerNewGasto}>
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
},
logoImage: {
  width: 180,
  height: 60,
  alignSelf: "center",
  marginTop: 22,
  marginBottom: 19
},
 });

export default AgregarGastos;