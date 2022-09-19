import { StyleSheet } from "react-native";
import COLORS from "../../constants/index"

export default styles = StyleSheet.create({
    container : {
        backgroundColor : COLORS.BackGroundColor,
        flex : 1 ,
        justifyContent:'center' ,
        alignItems:'center'
    },
    textStyle : {
        fontSize : 21 ,
        lineHeight :27 ,
        letterSpacing :3 ,
        padding:11 ,
        color:COLORS.TextColor}
})