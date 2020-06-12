import React, {useContext} from 'react'
import './Income.css'
import {GlobalContext} from '../context/Globalstate'
export default function Income() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0 ).reduce((acc,item) => (acc += item), 0).toFixed(2)
    const expense = amount.filter(item => item < 0).reduce((acc,item) => (acc+=item),0).toFixed(2)
    return (
        <div className="income">
            <div>
                <h1 className="inc">Income:</h1>
                <p className="size"><span className="sp">+$</span>{income}</p>
            </div>
            <div>
                <h1 className="exp">Expense:</h1>
                <p className="size"><span className="sp">-$</span>{expense}</p>
            </div>
        </div>
    )
}
