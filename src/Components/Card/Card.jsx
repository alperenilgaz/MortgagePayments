import React from 'react'
import './card.css'

import ResultSide from '../ResultSide/ResultSide'
import InputSide from '../InputSide/InputSide'
const Card = () => {
  return (
    <div className="card-container">
     <InputSide/>  
     <ResultSide/>

    </div>
  )
}

export default Card