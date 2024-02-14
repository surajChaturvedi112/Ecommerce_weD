import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    
      <div >
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home Page  OR Product listing page</h1>} />
          <Route path="/add" element={<h1>Add Product</h1>} />
          <Route path="/update" element={<h1>Update Product</h1>} />
          <Route path="/profile" element={<h1>Profile Page OR User</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
