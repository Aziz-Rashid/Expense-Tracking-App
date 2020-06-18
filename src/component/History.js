import React, { useContext} from 'react'
import './History.css'
import {GlobalContext} from '../context/Globalstate'

import FlipMove from 'react-flip-move'
export default function History() {
    const {transactions} = useContext(GlobalContext)
    const {deletetransitions} = useContext(GlobalContext)
    return (
        <div className="q">
            <p className="para">History</p>
            
            <FlipMove duration={800} easing="ease-in-out">
            {transactions.map((transaction,id) =>(
                <div key={id} className="history">
                   
                   <div> <p className="his" id="a" >{transaction.text}</p></div>
                   <div> <p className="his new"> ${Math.abs(transaction.amount)}</p></div>
                   <div> <button className="btn" onClick={(clickhandler) => deletetransitions(transaction.id)}>x</button></div>
                    
                </div>
            ))}
            </FlipMove>
            
        </div>
    )
}
