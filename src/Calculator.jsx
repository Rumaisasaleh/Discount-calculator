import React, { useState } from 'react';
import './App.css'; 
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Calculator() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [amountSaved, setAmountSaved] = useState(0);
  const [priceDifference, setPriceDifference] = useState(0);

  const calculateDiscount = () => {
    const amt = parseFloat(amount);
    const disc = parseFloat(discount);

    if (!isNaN(amt) && !isNaN(disc)) {
      const discountAmount = amt * (disc / 100);
      const discountedPrice = amt - discountAmount;

      setNewPrice(discountedPrice.toFixed(2));
      setAmountSaved(discountAmount.toFixed(2));
      setPriceDifference(discountAmount.toFixed(2));
    }
  };

  const resetCalculator = () => {
    setAmount('');
    setDiscount('');
    setNewPrice(0);
    setAmountSaved(0);
    setPriceDifference(0);
  };

  return (
    <>
      <div className="app text-center bg-info">
        <h3 className='pt-4'><b>DISCOUNT CALCULATOR</b></h3>
        <p><i>"Calculate your savings in seconds! The ultimate discount calculator at your fingertips."</i></p>

        <div className="row d-flex text-center text-primary justify-content-center">

   {/* result part */}

          <div className="col-lg-6 col-md-8 col-sm-12 d-flex flex-column border-info align-items-center mt-5">
            <div className="container1">
              <img src="https://cdn.dribbble.com/users/2613050/screenshots/7347945/discount_logo.gif" width="135px" height="135px" alt="Discount Logo" />
              <h3 className='text-center py-3 head mt-1'><b>Amount Paid</b></h3>  
              <div className='text-center'>
                <h4>New Price</h4>
                <p className='text-center fs-3'>&#8377; {newPrice}</p>
              </div> 
              <div className='d-flex justify-content-between '>
                <div>
                  <h6 className='fw-semibold'>Amount Saved</h6>
                  <p className='text-center fs-3'>&#8377; {amountSaved}</p>
                </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                  <h6 className='fw-semibold'>Price Difference</h6>
                  <p className='text-center fs-3'>&#8377; {priceDifference}</p>
                </div>
              </div>
            </div>
          </div>

  {/* calculation part */}
  
          <div className="col-lg-4 col-md-8 col-sm-12 mt-5">
            <img src="https://i.pinimg.com/564x/2d/7d/68/2d7d6855709e85cadc9fc7166416f214.jpg" width="230px" height="230px" alt="Discount Image" />
            <h6 className='mt-3'><b>Amount(₹)</b></h6>
            <MDBInput 
              label="Enter Amount" 
              id="amount" 
              type="text" 
              className="custom-input" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)} 
            />
            <h6 className='mt-3'><b>Discount(%)</b></h6>
            <MDBInput 
              label="Enter Discount" 
              id="discount" 
              type="text" 
              className="custom-input" 
              value={discount}
              onChange={(e) => setDiscount(e.target.value)} 
            />
            <MDBBtn 
              style={{marginTop:'40px'}} 
              color='primary'
              onClick={calculateDiscount}
            >
              Calculate
            </MDBBtn>&nbsp;
            &nbsp;
            <MDBBtn 
              style={{marginTop:'40px'}} 
              color='primary'
              onClick={resetCalculator}
            >
              Reset
            </MDBBtn>
          </div>

        </div>
      </div>
    </>
  );
}

export default Calculator;
