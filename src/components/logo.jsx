import React from "react"
import imgLogo from "../assets/logo-o.png"
import { LogoDiv } from "../Styles/styled";


const Logo = () => {
    return ( 
        <>
         <LogoDiv>
            <img src={imgLogo}/>
         </LogoDiv>
        </>
     );
}
 
export default Logo;