import React from "react";
import Areas from "./Areas";
import MissionVisionValues from "./MissionVisionValues";

import styled from "styled-components";
import Button from '../../components/Button'
import logo from "../../resources/images/relogoslatir/512x512px.svg"
import Icon from "../../components/Icon"
import WhatIsLatirComponent from "../../components/WhatIsLatirComponent"
 

const StyleButton = styled.div`
 text-align: center;
 align-items: center;
 padding-left: 30%;
 padding-right: 30%;
`
const StyleImage = styled.div`
 padding-top: 20px;
 padding-bottom: 20px;
 text-align: center;
 align-items: center;
`

 const WhatIsLatir = (props) => {
 return(
   <div>
       <StyleImage><Icon src={logo} size="huge"/></StyleImage>
       <WhatIsLatirComponent/>
       <StyleButton>
         <Button style={{width: "90%"}}>Vision, Mision y Valores</Button>
         <Button style={{width: "90%"}}>La Historia que Comienza</Button>
         <Button style={{width: "90%"}}>Donde Hemos Estado</Button>
       </StyleButton>
   </div>
 )
}
 
export default WhatIsLatir;
