import React, {useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Icon, Right,Button,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {ContextoGastos} from "../src/context/movimientosContext";
const { width, height } = Dimensions.get("window");
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
                     <LinearGradient 
                        colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                        style={styles.LinearGradient}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}> 
                        <View >
                            <Image source={require("../assets/letras_transparente.png")} style={styles.logoImage} />
                    
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
},
logoImage: {
  width: 180,
  height: 60,
  alignSelf: "center",
  marginTop: 22,
  marginBottom: 19
},
 });

export default modificarGasto;