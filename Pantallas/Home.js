import { View, Text, Alert } from 'react-native'
import React from 'react'
import { estilos } from '../styles'
import { Button } from '@rneui/themed'

const Home = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.Encabezado}>
        <Image  />//icono del menu
        <Text>Machtia</Text>
        <Image/>//ikono sesion
      </View>
      <View style={estilos.Cuerpo}>
        <View style={estilos.seccion1}>
            <Text></Text>
            <Image/>
        </View>
        <View style={estilos.seccion2}>
            <Image/>//imagen 1
            <Image/>//imagen 2
            <Image/>//imagen 3
        </View>
      </View>
      <View style={estilos.footer}>
        <Image/>//icono 1
        <Image/>//icono 2
        <Image/>//icono 3
        <Button title={"hola"} type='clear' onPress={()=>Alert.alert("alerta")} />
      </View>
    </View>
  )
}

export default Home