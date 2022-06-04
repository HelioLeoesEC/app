import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Alert,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { useState } from 'react';
import styles from './src/style';

export default function App() {
  const [valorproduto, setValorProduto] = useState("")
  const [taxa, setTaxa] = useState("")
  const [tempo, setTempo] = useState("")
  const [valorprodutofuturo, setValorProdutoFuturo] = useState("")
  const [taxafuturo, setTaxaFuturo] = useState("")
  const [parcelas, setParcelas] = useState("")

  const handerCalcularFuturo = () =>{

    let resultado = 0
    const parcela = parseInt(parcelas)
    for (let index = 0; index <= parcela - 1; index++) {
      resultado = resultado + (parseFloat(valorprodutofuturo)/parcela) / (1 + (parseFloat(taxafuturo)/100))**index 
    }
    return Alert.alert("Resultado",`O valor e ${resultado.toFixed(2)}`)
  };

  const handerCalcular = () => {
    const resultado = parseFloat(valorproduto) * (1 + (parseFloat(taxa))/100)**tempo
    return Alert.alert("Resultado",`O valor e ${resultado.toFixed(2)}`)
  };
  return (
    <ScrollView>
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style = {styles.Titulo}>Investeasy</Text>
      <View style = {styles.subtitle}><Text>Deslocando para o futuro</Text></View>

      <Text>Valor do produto</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setValorProduto(text.replace(/\D/g,""))}></TextInput>
      <Text>Taxa</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setTaxa(text.replace(/\D/g,""))}></TextInput>
      <Text>Tempo</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
    
      onChangeText={(text) =>setTempo(text.replace(/\D/g,""))}></TextInput>
      <TouchableOpacity 
      onPress = {handerCalcular}
      style = {styles.botao}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text style = {styles.subtitle}>Deslocando para o presente</Text>
      <Text>Valor do Produto</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setValorProdutoFuturo(text.replace(/\D/g,""))}></TextInput>
      <Text>Taxa</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setTaxaFuturo(text.replace(/\D/g,""))}></TextInput>
      <Text>Parcelas</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setParcelas(text.replace(/\D/g,""))}></TextInput>
      <TouchableOpacity
        onPress = {handerCalcularFuturo}
        style = {styles.botao2}
        >

        <Text>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View></TouchableWithoutFeedback>
    </ScrollView>
  );
}