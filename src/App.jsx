import Home from './Home'
import './App.css'
import Menu from './Menu'
import Card from './Card'
 import Foot from './Foot'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
 import Contact from './Contact'
import {Footer,Header} from './Layout'
 import {Route,Routes,useLocation} from 'react-router-dom'
function App() {
  
let local = useLocation()

 let auth = local.pathname === '/signup' || local.pathname == '/login' || local.pathname == '/contact'
  return (
    <>
     
       {!auth && <Header/>}
  
      <Routes>
        <Route path="/" element={<Navbar/>}>
         <Route index element={<Home/>}/> 
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
       {!auth && <Footer/>}

  
    </>
  )
}

export default App
