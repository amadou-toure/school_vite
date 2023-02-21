import { useState } from 'react'
import './App.css'
import Form from './pages/Form'
import Table from './pages/Table'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Table />
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Form />}
          />
           <Route path='/Form'
            element={<Table />}
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
