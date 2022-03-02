import './App.css';
import  {Navbar}  from './components/navbar/Navbar.js';
import { Sidebar } from './components/sidebar/Sidebar.js';
import {Header} from './components/header/Header.js'
import { About } from './components/about/About.js';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import {useState,useRef,useEffect} from 'react'


const useElementOnScreen = (options)=>{

  const ref = useRef(null)
  const [isVisible,setIsVisible] = useState(false)
  
  const callbackFunction = (entries)=>{
  entries.map(entry=>{
    setIsVisible(entry.isIntersecting)
  })
  }

  const observer = useRef(new IntersectionObserver(callbackFunction,options))

  useEffect(()=>{
    const {current : currentObserver} = observer

    if(ref.current) currentObserver.observe(ref.current)
    console.log('eff')
  
  
  return ()=>{    
    currentObserver.disconnect()
    console.log('return')
  }
  
  },[])
  
  return [ref,isVisible]
  
   }


function App() {

  

  return (
    <div className="App">
        <Navbar/>
        
        <Sidebar/>
        
        <div className='content'>
        <Header/>
        
        <About useElementOnScreen={useElementOnScreen}/>
        
        <Experience useElementOnScreen={useElementOnScreen}/>
        
        <Projects/>
        
        <Contact useElementOnScreen={useElementOnScreen}/>
        </div>

        <Footer/>
    </div>
  );
}

export default App;
