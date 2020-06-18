import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'
import './Newtransaction.css'
export default function Addnewtransaction() {
    let [text, settext] = useState("")
    let [amount, setamount] = useState()
    let { rem, addtransactions } = useContext(GlobalContext)
    

    const submit = e => {
        e.preventDefault()
        
    }
    const addincomee = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
    }
    const addexpensee = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: -amount
    }
    const handler = (e)=>{
        e.preventDefault();
        rem(addexpensee);
        settext("");
        setamount("")
    }
    const changedhandler = (e)=>{
        e.preventDefault();
        addtransactions(addincomee);
            settext("");
            setamount("")
    }
    return (
        <div>
            <div className="w">
                <p className="heading">Add new transactions</p>
            </div>
            <form onsubmit={submit}>
                <div className="inp">
                    <p className="text">Text:</p>
                    <input className="input" id="news" type="text" value={text} onChange={e => settext(e.target.value)} placeholder="Enter your text here..." />
                </div>
                <div className="inp">
                    <p className="text">Amount:</p>
                    <input className="input" type="number" value={amount} onChange={e => setamount(e.target.value)} placeholder="Enter your Amount here..." />
                </div>
                <div className="y">
                <div >
                    <input className="submit green" onsubmit={submit} onClick={changedhandler} type="submit" value="Add income" />
                </div>
                <div><input className="submit red" onClick={handler} type="submit"  value="Add expense" /></div></div>
            </form>
        </div>
    )
}
