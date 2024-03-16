import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, View, Text, Image } from "react-native"


export default function App() {
  const [{ illuminance }, definirIluminacao] = useState({ illuminance: 0 })
  
  return <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFBEB" />
    <View>
      <Text> Sensores do Smartphone! </Text>
      <Text> Testando a Iluminação do ambiente! </Text>
    </View>
  </ScrollView>
}
