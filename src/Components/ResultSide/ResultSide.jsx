import React from 'react'
import './resultSide.css'
import Empty from '../../../public/assets/images/illustration-empty.svg'

const ResultSide = ({formSubmit}) => {
  let totalRepayments = 0
  let monthlyRepayments= 0
  if(formSubmit !== null){
    const P = parseFloat(formSubmit.mortgageAmount)
    const annual_rate = parseFloat(formSubmit.interestRate)/100
    const r = annual_rate / 12
    const n = 25*12
    const m =  P * (r * (1 + r)**n) / ((1 + r)**n - 1)
   totalRepayments = m*n
    monthlyRepayments = m
  }

  return (
    <>
    {!formSubmit ? (
      <div className="result-side">
      <div className="empty-content">
          <div className="image">
              <img src={Empty} alt="" />
          </div>
          <div className="empty-text">
              <h5>Results shown here</h5>
              <p>Complete the form and click "calculate repayments" to see what your montly repayments would be</p>
          </div>
      </div>
      </div>
    ):
    <div className="active-side">
        <div className="title">
          <h5>Your Results</h5>
        </div>
        <div className="info">
          <p>Your results are shown below based on the information
          you providede. To adjust the results, edit the form and click "calculate repayments" again </p>
        </div>
        <div className="payment">
            <div className="monthly-payment">
              <p>Your monthly repayments</p>
              <h3>£{monthlyRepayments.toFixed(5)}</h3>
            </div>
            <div className="bot-line">

            </div>
            <div className="total-payment">
              <p>Total you'll repay over the term</p>
              <h5>£{totalRepayments.toFixed(2)}</h5>
            </div>
        </div>
    </div>
    }
      
    </>
  )
}

export default ResultSide