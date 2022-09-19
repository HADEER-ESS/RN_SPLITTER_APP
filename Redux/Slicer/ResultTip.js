import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bill : 0,
    people : 0,
    result : 0,
    totalTip : 0,
    tip : null ,
    resetAll : true
}
export const ResultSlice = createSlice({
    name : "Result",
    initialState,
    reducers : {
        CountTip : (state ) => {
            state.resetAll = false
            state.result = parseFloat(parseInt(state.bill) * (parseInt(state.tip) / 100) / parseInt(state.people)).toFixed(2)
            state.totalTip = parseFloat(parseInt(state.bill) * (parseInt(state.tip) / 100)).toFixed(2) 
            console.log("bill " , state.bill , "percentage " , state.tip , " people " , state.people)
        },
        ResetResult : (state) => {
            state.bill=0;
            state.people=0;
            state.resetAll=true;
            state.result=0;
            state.tip=null;
            state.totalTip=0;
            console.log("state is " ,state , "initial state " , initialState)
        },
        updateBillAmount : (state ,action) => {
            state.resetAll = false
            state.bill=action.payload
            console.log("Bill " , state.bill)
        },
        updatePeopleAmount : (state ,action) => {
            state.resetAll = false
            state.people=action.payload
            console.log("people " , state.people)
        },
        updateTipsAmount : (state , action) => {
            state.resetAll = false
            state.tip=action.payload
            console.log("Tips " , state.tip)
        }
    }
})
export const {CountTip , ResetResult , updateBillAmount , updatePeopleAmount , updateTipsAmount} = ResultSlice.actions
export default ResultSlice.reducer