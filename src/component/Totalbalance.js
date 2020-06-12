import React, {useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'
import './Total.css'
export default function Totalbalance() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div className="total">
                <h1>Total Balance:</h1>
                <p className="size"><span className="sp">$</span>{total}</p>
            </div>
        </div>
    )
}
