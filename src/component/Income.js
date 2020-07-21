import React, {useContext} from 'react'
import './Income.css'
import {GlobalContext} from '../context/Globalstate'
import Countup from 'react-countup';
import FlipMove from 'react-flip-move'
export default function Income() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0 ).reduce((acc,item) => (acc += item), 0).toFixed(2)
    const expense = amount.filter(item => item < 0).reduce((acc,item) => (acc -= item), 0).toFixed(2)
    return (
        <div className="income">
            <FlipMove duration={800} easing="ease-in-out">

            <hr />
            <div>
                
                <p className="inc">Income: <span><span className={income > 0 ? 'greens':null}>$+</span><Countup start={0} end={income} duration={2.75} /></span></p>
            </div>
            <hr />
            <div>
                <p className="exp">Expense: <span ><span className="reds">$-</span><Countup start={0} end={expense} duration={2.75} /></span></p>
                
                </div>
            </FlipMove>
        </div>
    )
}
