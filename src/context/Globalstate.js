import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const initialstate = {
    transactions: [
        {id:1, text:"food", amount:1000},
        {id:4, text:"flower", amount: -500}
    ]
}
export const GlobalContext = createContext(initialstate)

export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(AppReducer,initialstate)

function deletetransitions(id){
    dispatch({
        type: "remove",
        payload: id
    })
}
function addtransactions(transaction){
    dispatch({
        type: "add",
        payload: transaction
    })
}
function rem(transaction){
    dispatch({
        type: "sub",
        payload: transaction
    })
}
return (
<GlobalContext.Provider value={{transactions: state.transactions,rem,addtransactions,deletetransitions}}>{children}</GlobalContext.Provider>
)
}