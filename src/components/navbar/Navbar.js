import { useEffect } from "react";
import "./navbar.css";


export function Navbar() {
  let prevScrollpos = window.pageYOffset;
  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        
      } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.height="70px";
        document.getElementById("navbar").style.boxShadow="0 10px 30px -10px var(--navy-shadow)";
      }
      prevScrollpos = currentScrollPos;
      if(prevScrollpos===0){
          document.getElementById("navbar").style.boxShadow="";
          document.getElementById("navbar").style.height="100px";
      }
    };
    
  }, [prevScrollpos])
  
  
  return (
    <div className="nav-container" id='navbar'>
      <div className="nav-logo"><a href='#'></a></div>
      <div className="nav-items">
        <div className="nav-content-item"><a href='#about'>About</a></div>
        <div className="nav-content-item"><a href='#experience'>Experience</a></div>
        <div className="nav-content-item"><a href='#work'>Work</a></div>
        <div className="nav-content-item nav-contact"><a href='#contact'>Contact</a></div>
      </div>
    </div>
  );
}
