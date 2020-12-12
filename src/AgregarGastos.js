import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon, Right,Button,Picker,DatePicker} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
//import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import {ContextoGastos} from "../src/context/movimientosContext";
//import { MuiPickersUtilsProvider} from '@material-ui/pickers';
//import DateFnsUtils from '@date-io/date-fns';
import {Fontisto} from '@expo/vector-icons'; 
const { width, height } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons'; 
import {ContextoCategorias} from "../src/context/categoriasContext"


 const AgregarGastos  = ({ navigation }) =>{ 

          const {categorias} = useContext(ContextoCategorias);
          const [descripcion, setDescripcion] = useState("");
          const [monto, setMonto] = useState("");
          const [fecha, setFecha] = useState(new Date());
          const contextoGastos = useContext(ContextoGastos);
          const { agregarGasto, refreshGastos } = contextoGastos;
          
          const [categoria, setCategoria] = useState("");

         
          const handlerNewGasto = () => {
          agregarGasto(descripcion,monto,refreshGastos);
            navigation.goBack();
          };
         
          console.log(categorias);

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
                            <Text style={styles.textoTitulo}> Agregar Gastos </Text> 
                            <View style={styles.viewStyle}>
                            <Item style={styles.itemStyle} >
                                <Input 
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholder='Descripción'/>
                            </Item>
                            <Item style={styles.itemStyle} >
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

export default AgregarGastos;