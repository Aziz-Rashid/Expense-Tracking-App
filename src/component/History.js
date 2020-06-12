import React, { useContext } from 'react'
import './History.css'
import {GlobalContext} from '../context/Globalstate'
export default function History() {
    const {transactions} = useContext(GlobalContext)
    const {deletetransitions} = useContext(GlobalContext)
    return (
        <div>
            <p className="para">History</p>
            {transactions.map((transaction,id) =>(
                <div key={id} className="history">
                    <p>{transaction.text}</p>
                    <p>${Math.abs(transaction.amount)}</p>
                    <button className="btn" onClick={() => deletetransitions(transaction.id)}>Delete</button>
                </div>
            ))}
            
        </div>
    )
}
