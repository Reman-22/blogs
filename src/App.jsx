import './App.css'
import { Routes,Route } from 'react-router-dom'
import FooterSection from './Components/Footer/FooterSection.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {
const Items=[ {
  content :"Home" ,
  Url:"/"
},
{
 content: "About",
Url:"/about"
}]
  return (
        <>
    <header>
      <NavBar title="DashStack"  items={Items}   btn="Sign in"/>
    </header>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </main>
  <footer>
      <FooterSection description=" © 2025 Blogs , vica web solutions"/>
      </footer>
    </>
  )
}

export default App
