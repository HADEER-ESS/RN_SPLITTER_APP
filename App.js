import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import AppProvider from "./Redux/Provider"

const Stack = createNativeStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown :false}}>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </AppProvider>
    )
  }
}