import React from 'react'
import Card1 from './Card1.js'
import Card2 from './Card2.js'
import Card3 from './Card3.js'

function Contenedor(){
    return(
        <div className="contenedor">
              <Card1></Card1>
              <Card2></Card2>
              <Card3></Card3>
        </div>
    );
}
export default Contenedor;