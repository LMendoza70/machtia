import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { estilos } from '../styles'

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.Titulo}>Machtiaa</Text>
      <Image style={estilos.imgLogin} source={require('../assets/nahuatl.png')}/>
      <TextInput placeholder='Usuario' style={estilos.TextInput}/>
      <TextInput placeholder='Password' secureTextEntry={true} style={estilos.TextInput} />
      <Button title='Login' />
    </View>
  )
}

export default Login