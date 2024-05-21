import { StyleSheet } from "react-native";

const colores={
    primario: '#69543E', // Café oscuro
    secundario: '#A78B63', // Café medio
    terciario: '#E6D8B9', // Café claro
    acento: '#F3E4CD', // Beige claro
    texto: '#423936', // Negro
    fondo: '#FDF5E6', // Crema
}
const estilos=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colores.fondo,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Titulo:{
        fontSize:30,
        color:colores.texto,
        fontStyle:'italic'
    },
    imgLogin:{
        height:50,
        width:50
    },
    Encabezado:{
        flexDirection:'row',
    },
    footer:{
        flexDirection:'row'
    },
    Cuerpo:{
        flexDirection:'column'
    },
    seccion1:{
        flexDirection:'row'
    },
    seccion2:{
        flexDirection:'row'
    },
        TextInput: {
            borderWidth: 1,
            borderColor: colores.texto,
            borderRadius: 5,
            padding: 10,
            marginVertical: 10,
            width: '80%',
            fontSize: 16,
            color: colores.texto,
        }
    
})



export {estilos,colores}