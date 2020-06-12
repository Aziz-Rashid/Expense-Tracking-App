import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'
import './Newtransaction.css'
export default function Addnewtransaction() {
    let [text,settext] = useState("")
    let [amount,setamount] = useState()
    let {addtransactions} = useContext(GlobalContext)

    const submit = e =>{
        e.preventDefault()
        const newarr = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount : +amount
        }
        addtransactions(newarr)
        settext("")
        setamount("")
    }
    
    return (
        <div>
            <div>
                <p className="heading">Add new transactions</p>
            </div>
            <form onSubmit={submit}>
            <div className="inp">
                <p className="text">Text:</p>
                <input className="input" type="text" value={text} onChange={e => settext(e.target.value)}  placeholder="Enter your text here..."/>
            </div>
            <div className="inp">
                <p className="text">Amount:</p>
                <input className="input" type="text" value={amount} onChange={e => setamount(e.target.value)} placeholder="Enter your Amount here..."/>
            </div>
            <div>
                <input className="submit" type="submit" value="Add transaction" />
            </div>
            </form>
        </div>
    )
}
