import React from 'react'
import './resultSide.css'
import Empty from '../../../public/assets/images/illustration-empty.svg'

const ResultSide = () => {
  return (
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
  )
}

export default ResultSide