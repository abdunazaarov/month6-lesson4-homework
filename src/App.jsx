import { useState } from 'react'
import './App.css'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {

  const inc = () => {
    console.log("inc function")
    toast.success("Hello World")
  }

  return (
    <>
     <h2 className='text-red-500'>Worl</h2>
     <button onClick={inc} className='bg-gray-400 p-2'>Click</button>
     <button onDoubleClick={()=> toast.error("Error")} className='p-2 border'>Click</button>

     <ToastContainer/>
    </>
  )
}

export default App
