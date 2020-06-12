import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const initialstate = {
    transactions: [
        {id:1, text:"food", amount:200},
        {id:2, text: "book",amount: -500},
        {id:3, text:"fee", amount: 1000},
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
return (
<GlobalContext.Provider value={{transactions: state.transactions,addtransactions,deletetransitions}}>{children}</GlobalContext.Provider>
)
}