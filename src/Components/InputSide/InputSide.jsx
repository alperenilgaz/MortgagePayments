import React from 'react'
import './inputSide.css'
const InputSide = () => {
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

    </div>
  )
}

export default InputSide