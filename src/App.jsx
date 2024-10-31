import { useState } from 'react'
import './App.css'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import TodoLists from './components/TodoLists';

function App() {

  

  return (
    <>
      <TodoLists/>
      <ToastContainer/>
    </>
  )
}

export default App
