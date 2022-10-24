
import { useState } from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar (){


  const [switchColor, setColor] = useState(false);


  function changeColor (){

    
    setColor(!switchColor);

   
    document.body.classList.toggle("dark");

    

  }



 return (
 
 <div className="container-fluid header-container">
      <h4>Where in the World?</h4>
      <span style={{flex: "1 1 0%", display: "block"}}></span>

      <p onClick={changeColor} id="switch"> {switchColor ? ( <><LightModeIcon/> Light Mode </>) : (<><NightlightIcon/> Dark Mode</>)} </p>

    </div>
 );

}

export default Navbar;