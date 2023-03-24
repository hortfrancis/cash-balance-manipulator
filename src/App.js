import { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// Reducers named after what they do, not what the buttons are called
import { increaseByAmount, decreaseByAmount, increaseBy5Percent, decreaseBy15Percent } from './store/balance';


function App() {

  const inputRef = useRef(null);

  const [userInput, setUserInput] = useState('');

  const balance = useSelector((state) => state.balance.value);

  const dispatch = useDispatch();

  /*  Event handlers for the buttons */

  function handleDeposit(e) {
    console.log('in handleDeposit');
    dispatch(increaseByAmount(Number(userInput)));
    setUserInput('');
  }

  function handleWithdraw(e) {
    console.log('in handleWithdraw');
    dispatch(decreaseByAmount(Number(userInput)));
    setUserInput('');
  }

  function handleInterest() {
    if (balance < 0 ) alert("Cannot apply interest: balance is under £0");
    dispatch(increaseBy5Percent());

  }

  function handleCharges() {
    if (balance < 0 ) alert("Cannot apply interest: balance is under £0");
    dispatch(decreaseBy15Percent());
  }

  // Focus is automatically given to the <input type="number"> when the component renders and whenever the balance is updated. 
  const dependencyArray = [balance];
  useEffect(() => {
    inputRef.current.focus(); 
  }, dependencyArray);

  return (
    <div className="App">
      
      <h1>Cash Balance Manipulator</h1>

      {/* By fixing the balance value to two decimal places here, the interest can be calculated more accurately,
          because the underlying data can have many more decimal digits.  */}
      <p><span id="balance">£{balance.toFixed(2)}</span></p>

        <label htmlFor="number-input">Amount:</label>
        {/* Data validation: `min="0"` property prevents a negative value */}
        <input 
          id="number-input" 
          type="number" 
          name="value" 
          min="0" 
          onChange={(e) => setUserInput(e.target.value)} 
          value={userInput}
          ref={inputRef} />
        
        <button id="deposit-button" onClick={handleDeposit}>Deposit</button>
        <button id="withdraw-button" onClick={() => dispatch(handleWithdraw)}>Withdraw</button>
        {/* Interest and charges only work if the balance is above £0
            Check `balance.js` for input validation. */}
        <button id="add-interest-button" onClick={handleInterest}>Add Interest</button>
        <button id="add-charges-button" onClick={handleCharges}>Charges</button>      

    </div>
  );
}

export default App;
