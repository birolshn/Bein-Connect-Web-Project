import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/series/:id' element={<DetailsScreen />} />
      </Routes>
    </Router>
  )
}

export default App
