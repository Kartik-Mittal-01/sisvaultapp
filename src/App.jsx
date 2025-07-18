import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Notes from './pages/Notes'
import PrivateRoute from './pages/PrivateRoute'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route 
          path="/notes" 
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  )
}

export default App
