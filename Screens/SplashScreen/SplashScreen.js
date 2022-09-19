import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./SplashStyle"

export default class SplashScreen extends React.Component{
    render(){
        const renderToHome = () => {
            setTimeout(()=>this.props.navigation.navigate("Home") , 130)
        }
        return(
            <View style={styles.container}>
                <Image source={require("../../Assets/Images/Splash.png")}/>
                <Text style={styles.textStyle}>WELCOME TO SPLITTER</Text>
                {
                    renderToHome()
                }
            </View>
        )
    }
}