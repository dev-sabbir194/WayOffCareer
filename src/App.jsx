import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import JobCategory from './components/JobCategory/JobCategory';
import Footer from './components/Footer/Footer';
import Feature from './components/Feature/Feature';
import Assingment from './components/Assingment/Assingment';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <JobCategory></JobCategory>
      <Feature></Feature>
      
    </div>
  )
}

export default App
