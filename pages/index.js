import React,{ useState} from 'react'
import Footer from '../components/Footer'
import HardSkils from '../components/HardSkils'
import Projetos from '../components/Projetos'
import Cursos from '../components/Cursos'
import Navbar from '../components/Navbar'
import About from '../components/About'

export default function App() {
  const [tabs, setTabs] = useState("home");

  const Tab = () => {
    switch(tabs){
      case "hardSkils" : return <HardSkils />
        break;
      case "projetos" : return <Projetos />
        break;
      case "cursos" : return <Cursos />
        break;
      case "home" : return <About />
        break;     
      
    }
  }
  
  return ( 
      <div className="flex flex-col h-screen justify-between bg-gray-100 min-h-screen">
        <Navbar setTabs={setTabs}/>
        <div className="mt-48 bg-gray-100">
          <Tab />         
        </div> 
        <Footer />      
      </div>      
    )
}



