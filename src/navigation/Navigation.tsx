import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../utils/NavigationUtil'
import SplashScreen from '../screens/SplashScreen'
import GameScreen from '../screens/GameScreen'
import HomeScreen from '../screens/HomeScreen'
import LevelScreen from '../screens/LevelScreen'
import { SoundProvider } from './SoundContext'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <SoundProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='SplashScreen' component={SplashScreen} />
                    <Stack.Screen name='HomeScreen' options={{ animation: 'fade' }} component={HomeScreen} />
                    <Stack.Screen name='GameScreen' options={{ animation: 'fade' }} component={GameScreen} />
                    <Stack.Screen name='LevelScreen' options={{ animation: 'fade' }} component={LevelScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SoundProvider>
    )
}

export default Navigation