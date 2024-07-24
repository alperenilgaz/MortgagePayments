import React, { useState } from 'react'
import Calculate from '../../../public/assets/images/icon-calculator.svg'
import ResultSide from '../ResultSide/ResultSide'
import './inputSide.css'
const InputSide = () => {
    const [formData, setFormData] = useState({
        mortgageAmount:"",
        mortgageTerm:"",
        interestRate:"",
        mortgageType:""
    })
    const [formSubmit, setFormSubmit] = useState(null)
  
    const handleChange=(e) => {
        
        const {name,value,type,checked} = e.target
        
        if(type==="radio"){
            setFormData(prevState => ({
                ...prevState,
                mortgageType:value
            }))
        }else{
            setFormData(prevState => ({
                ...prevState,
                [name]:value
            }))
        }
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        setFormSubmit(formData)
    } 
    const ClearForm = () => {
            setFormData({
              mortgageAmount: "",
              mortgageTerm: "",
              interestRate: "",
              mortgageType: ""
            });
            setFormSubmit(null)
          

    }

console.log(formSubmit);
  return (
    <>
    <form onSubmit={handleSubmit} >
        <div className="input-side">
            <div className="header">
                <div className="title">
                    <h3>Mortgage Calculator</h3>
                </div>
                <div className="clear-btn">
                    <button type='button' onClick={ClearForm}>Clear All</button>
                </div>
            </div>
            <div class="amount">
        <label>Mortgage Amount</label>
        <div class="input">
            <input 
        
            name='mortgageAmount'
            value={formData.mortgageAmount}
            onChange={handleChange}
            type="text" />
            <span>£</span>
        </div>
    </div>
            <div className="input-wrap">
                <div className="term">
                    <label>Mortgage Term</label>
                    <input
                    onChange={handleChange}
                    name='mortgageTerm'
                    value={formData.mortgageTerm}
                    type="text" />
                    <span>years</span>
                </div>
                <div className="rate">
                    <label>Interest Rate</label>
                    <input 
                    onChange={handleChange}
                    value={formData.interestRate}
                    name='interestRate'
                    type="text" />
                    <span>%</span>
                </div>
            </div>

            <div className="mortgage-type">
                <p>Mortgage Type</p>
        <div className={`repayment ${formData.mortgageType==='repayment' ? 'selected' : ''}`}>
            <input 
            checked={formData.mortgageType==="repayment"} 
            onChange={handleChange} 
            id="repayment" 
            name="mortgageType" 
            value="repayment" 
            type="radio" />
            <label for="repayment">Repayment</label>
        </div>
        
        <div className={`interest ${formData.mortgageType==='interest' ? 'selected' : ''}`}>
            <input  
            checked={formData.mortgageType==="interest"} 
            onChange={handleChange} 
            id="interest" 
            name="mortgageType" 
            value="interest" 
            type="radio" />
            <label for="interest">Interest Only</label>
        </div>
    </div>
            <div className="calculate-btn">
                
                <button type='submit'>
                <img src={Calculate} alt="" />
                    Calculate Repayments</button>
            </div>
        </div>
    </form>    
    <ResultSide formSubmit={formSubmit}/>
    </>
  )
}

export default InputSide