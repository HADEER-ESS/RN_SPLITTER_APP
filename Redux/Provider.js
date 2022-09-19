import React, { createContext, useState } from "react";

export const AppContext = createContext()

export default AppProvider = ({children}) => {
    const [bill , setBill] = useState(null)
    const [people , setPeople] = useState(null)
    const [tip , setTip] = useState(null)
    const [result , setResult ] = useState(0.00)
    const [totalTip , setTotalTip] = useState(0.00)
    const [ClickedId, setClickedId] = useState(null);
    return(
        <AppContext.Provider
        value={{
            bill,setBill,
            people,setPeople,
            tip,setTip,
            result ,
            totalTip,
            ClickedId , setClickedId,
            countTipsFun : () => {
                setResult(parseFloat(parseFloat(bill) * (parseFloat(tip) / 100) / parseFloat(people)).toFixed(2));
                setTotalTip(parseFloat(parseFloat(bill) * (parseFloat(tip) / 100)).toFixed(2))
            },
            resetResultFun : () => {
                setBill('')
                setPeople('')
                setResult(0)
                setTip('')
                setTotalTip(0)
                setClickedId(null)
            }

        }}
        >
            {children}
        </AppContext.Provider>
    )
}