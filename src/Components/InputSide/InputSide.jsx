import React, { useState } from 'react'
import Calculate from '../../../public/assets/images/icon-calculator.svg'
import './inputSide.css'
const InputSide = () => {
    const [selectedRadio, setselectedRadio] = useState("")
    console.log(selectedRadio);
   
  return (
    <div className="input-side">
        <div className="header">
            <div className="title">
                <h3>Mortgage Calculator</h3>
            </div>
            <div className="clear-btn">
                <button>Clear All</button>
            </div>
        </div>
        <div class="amount">
    <label>Mortgage Amount</label>
    <div class="input">
        <input type="text" />
        <span>£</span>
    </div>
</div>
        <div className="input-wrap">
            <div className="term">
                <label>Mortgage Term</label>
                <input type="text" />
                <span>years</span>
            </div>
            <div className="rate">
                <label>Interest Rate</label>
                <input type="text" />
                <span>%</span>
            </div>
        </div>

        <div className="mortgage-type">
            <p>Mortgage Type</p>
    <div className={`repayment ${selectedRadio==="repayment" ? 'selected':''}`}>
        <input checked={selectedRadio==="repayment"} onChange={(e) => setselectedRadio(e.target.value) } id="repayment" name="mortgage" value="repayment" type="radio" />
        <label for="repayment">Repayment</label>
    </div>
    
    <div className={`interest ${selectedRadio === 'interest' ? 'selected':''}`}>
        <input  checked={selectedRadio==="interest"} onChange={(e) => setselectedRadio(e.target.value)} id="interest" name="mortgage" value="interest" type="radio" />
        <label for="interest">Interest Only</label>
    </div>
</div>
        <div className="calculate-btn">
            
            <button>
            <img src={Calculate} alt="" />
                Calculate Repayments</button>
        </div>
    </div>
  )
}

export default InputSide