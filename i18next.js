import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    compatibilityJSON : "v3",
    lng : "en" , 
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