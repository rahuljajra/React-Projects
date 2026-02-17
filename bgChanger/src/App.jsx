import { useState } from 'react'
import './App.css'

function App() {
  const [bg, setbg] = useState("orange")

  return (
    <div className='container-wrapper w-full h-screen' style={{backgroundColor: bg}}>
      <h1 className='text-3xl font-bold text-center'>Background Changer</h1>
      <div className='fixed bottom-4'>
        <button className='bg-green-500 rounded-lg py-2 px-4 bg-green' onClick={()=> setbg("green")} style={{backgroundColor: "green"}}>Green</button>
        <button className='bg-red-500 py-2 px-4 text-white rounded-lg' onClick={()=> setbg("red")} style={{backgroundColor: "red"}}>Red</button>
        <button className='bg-white-500 py-2 px-4 text-black rounded-lg' onClick={()=> setbg("white")} style={{backgroundColor: "white"}}>White</button>
        <button className='bg-black-500 py-2 px-4 text-white rounded-lg' onClick={()=> setbg("Black")} style={{backgroundColor: "black"}}>Black</button>
        <button className='bg-yellow-500 py-2 px-4 text-white rounded-lg' onClick={()=> setbg("Yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
        <button className='bg-red-500 py-2 px-4 text-white rounded-lg' onClick={()=> setbg("aqua")} style={{backgroundColor: "aqua"}}>aqua</button>
      </div>
    </div>
  )
}

export default App
