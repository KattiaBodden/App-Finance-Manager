import React, { useContext } from "react";
import {Container,View,Header,Icon,Fab,Card,List,ListItem, Left, Right, Body} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ContextoIngresos } from "../src/context/ingresoContext";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const pantallaIngresos= ({ navigation }) => { 

    const {ingresos} = useContext(ContextoIngresos);
    var montos = ingresos ? ingresos.map((ingreso)=>(ingreso.monto)) : null;
    
    var suma = 0;
    montos ? montos.forEach(function(monto){
        suma += monto;
    }):null; 

       return (
            <Container style={styles.Fondo}>
                <LinearGradient 
                   colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                   style={styles.LinearGradient}
                   start={{ x: 1, y: 1 }}
                   end={{ x: 1, y: 0 }}> 
                   <View >
                        <Image source={require("../assets/letras.png")} style={styles.logoImage} />
               
                       <Text style={styles.h1}>Ingresos</Text>
                       <View style={styles.divisor}/>
                       
                       <Card style={styles.lista}>
                            
                            <ScrollView>
                              <List>
                                 {ingresos ? 
                                    ingresos.map((ingreso) => (
                                        <ListItem key={ingreso.id.toString()} 
                                         onPress={() => {      
                                            navigation.navigate("modificarIngreso", { id: ingreso.id });
                                        }}>
                                            <Left><Text>{ingreso.descripcion}</Text></Left>
                                            <Body><Text>L. {ingreso.monto} </Text></Body> 
                                            <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right>   
                                        </ListItem>
                                    ))
                                    : null}

                                </List>   
                            </ScrollView>

                            <View>
                                <Text style={styles.textoTotal}>Total: L. {suma}</Text>
                            </View>
                        </Card>
                        <Fab
                            active={true}
                            position="bottomRight"
                            style={{ backgroundColor: "#AB2C2C" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarIngreso")
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
        backgroundColor: '#3CCCD6',
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
        alignSelf:"center",
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
        fontSize:20,
        marginBottom: 20
    },

    logoImage: {
        width: width * 0.85,
        height: 60,
        alignSelf: "center",
        marginTop: 22,
        marginLeft: 5
      },
 });

export default pantallaIngresos;