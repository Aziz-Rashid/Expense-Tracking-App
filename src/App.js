import React from 'react'
import Header from './component/Header'
import Totalbalance from './component/Totalbalance'
import Income from './component/Income'
import History from './component/History'
import Newtransaction from './component/Newtransaction'
import { GlobalProvider } from './context/Globalstate'
import './App.css'

export default function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <Totalbalance />
      <Income />
      <History />
      <Newtransaction />
    </GlobalProvider>
  )
}
