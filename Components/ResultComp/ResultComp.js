import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import "../../i18next.js"
import { AppContext } from "../../Redux/Provider";


export default function ResultComp(){
    const { result , totalTip , resetResultFun} = useContext(AppContext)
    const {t} = useTranslation()
    return(
        <View style={{backgroundColor:COLORS.PrimaryColor , padding:25 , borderRadius:9}}>
            <Text style={{fontSize:17 , lineHeight:21 , letterSpacing:2 , color:COLORS.WhiteColor}}>{t("tipAmount")}</Text>
            <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                <Text style={{fontSize:15 , lineHeight:18 , color:COLORS.TextColor}}>/ {t("person")}</Text>
                <Text style={{fontSize:25 , color:COLORS.SecondtryColor , fontWeight:"bold"}}>$ {isNaN(result) ? 0 : result}</Text>
            </View>
            <Text style={{fontSize:17 , lineHeight:21 , letterSpacing:2 , color:COLORS.WhiteColor ,  paddingTop:19}}>{t("totalTip")}</Text>
            <Text style={{fontSize:25 , color:COLORS.SecondtryColor , fontWeight:"bold" , textAlign:"right"}}>$ {isNaN(totalTip) ? 0 : totalTip}</Text>
            <TouchableOpacity onPress={()=>resetResultFun()} style={{justifyContent:"center" , alignItems:"center" , height:50 , backgroundColor: COLORS.SecondtryColor , borderRadius:7 , marginTop:18}}>
                <Text style={{fontSize:23 , fontWeight:"bold" , color:COLORS.PrimaryColor , letterSpacing:3 , lineHeight:26}}>{t("reset")}</Text>
            </TouchableOpacity>
        </View>
    )
}