import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";

const userLanguage = window.navigator.language
const storagedLanguage = async() =>{
    i18n.changeLanguage(await AsyncStorage.getItem('langauge'))
}
useEffect(()=>{storagedLanguage()},[])
i18n.use(initReactI18next).init({
    compatibilityJSON : "v3",
    lang : storagedLanguage() ||userLanguage|| "en",
    fallbackLng : "en",
    debug: true,
    resources : {
        en : {
            translation : {
                bill : "Bill",
                selectTip : "Select Tip %" ,
                numberOfPeople : "Number of People" ,
                tipAmount : "Tip Amount",
                person : "person",
                totalTip : "Total Tip" ,
                reset : "reset"
            }
        },
        ar : {
            translation : {
                bill : "الفتورة",
                selectTip : "قيمة الضريبة % " ,
                numberOfPeople : "عدد الاشخاص" ,
                tipAmount : "قيمة الضريبة",
                person : "شخص",
                totalTip : "مجموع الضريبة" ,
                reset : "ابدأ من جديد"
            }
        }
    }
})

export default i18n;