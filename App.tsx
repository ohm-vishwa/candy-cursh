import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})