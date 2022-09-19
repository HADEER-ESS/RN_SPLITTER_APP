import i18next, { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import LogoImage from "../../Assets/Images/logo.svg";
import ButtonCompGroup from "../../Components/ButtonComp/ButtonComp";
import InputComp from "../../Components/InputComp/InputComp";
import LangSwitchButton from "../../Components/LangSwitchButton/LangSwitchButton";
import ResultComp from "../../Components/ResultComp/ResultComp";
import "../../i18next.js";
import styles from "./HomeStyle";

export default function HomeScreen(){
    const {t} = useTranslation()
        return(
            <ScrollView style={styles.pageStyle}>
                <View style={styles.LogoStyle}>
                    <LogoImage width={100} height={100}/>
                </View>
                <View style={styles.MainHomeStyle}>
                <LangSwitchButton/>
                    <Text style={styles.TextStyle}>{t("bill")}</Text>
                    <InputComp iconName={"dollar"} />
                    <Text style={styles.TextStyle}>{t("selectTip")}</Text>
                    <ButtonCompGroup percentages={["5%" , "10%" , "15%" , "25%" , "50%"]} />
                    <Text style={styles.TextStyle}>{t("numberOfPeople")}</Text>
                    <InputComp iconName={"user"} />
                    <ResultComp/>
                </View>
            </ScrollView>
        )
}