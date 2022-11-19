import React, { useEffect, useState } from "react";
import "../css/main.scss";
import cardBody from "../images/6.jpeg";
import chip from "../images/chip.png";
import visa from "../images/visa.png";

export const App = () => {
  const [number, setNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const insertCardNumberSeparator = (num) => {
    return num.match(/\d{1,4}/g).join(" ");
  };


  const validateNumber = (e) => {
    let inputValue = e.target.value.replace(/ /g, "");
    const maxLength = 16;
    const inputPattern = "^[0-9]*$";
    if (
      RegExp(inputPattern).test(inputValue) &&
      inputValue.length <= maxLength
    ) {
      const displayValue = inputValue.length
        ? insertCardNumberSeparator(inputValue)
        : inputValue;
      setNumber(displayValue);
    }
  };

  const displayCardNumber = (e) => {
    const numArg = e.target.value.split("");
    const cardNumberLength = 16;
    let numDOM = [];
    for (let i = 0; i <= cardNumberLength; i++ ) {
      if ( RegExp("^[0-9]*$").test(numArg[i]) ) {
        numDOM[i] = <span key={i}>{numArg[i]}</span>;
      } else {
        numDOM[i] = <span key={i}>#</span>;
      }
      if (!numDOM[i]) {
        numDOM = numDOM.splice(i, 1);
      }
    }
    console.log(numArg, numDOM);
    setCardNumber(numDOM);
  }


  const displaycaldHolders = () => {};

  return (
    <>
      <div className="wrapper">
        <form className="card-form" action="" method="post">
          <div className="card-item">
            <div className="card-item__side -front">
              <div className="card-item__wrap">
                <div className="card-item__top">
                  <img src={chip} alt="" />
                  <img src={visa} alt="" />
                </div>
                <div className="card-item__number">
                  <label htmlFor="cardNumber">
                    {/* {cardNumber.map((num, key) => {
                      return <span key={key}>{num}</span>;
                    })} */}
                    {cardNumber}
                    {/* <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span className="-spacer"></span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span className="-spacer"></span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span className="-spacer"></span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span>
                    <span>#</span> */}
                  </label>
                </div>
                <div className="card-item__bottom">
                  <label htmlFor="cardHolders">
                    <span className="card-item__title">Card Holder</span>
                    <div className="card-item__name">FULL NAME</div>
                  </label>
                  <div className="card-item__date">
                    <label htmlFor="expirationMonth" className="card-item__title">Expires</label>
                    <div className="card-item__date__inner">
                      <label htmlFor="expirationMonth">MM</label>
                      /
                      <label htmlFor="expirationYear">YY</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item__cover">
                <img src={cardBody} alt="" />
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                {/* <img src={cardBody} alt="" /> */}
              </div>
            </div>
          </div>
          <div className="form-inner">
            <div className="form-inner__box">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                onChange = {(num) => {
                  validateNumber(num);
                  displayCardNumber(num);
                }}
                value={number}
              />
            </div>
            <div className="form-inner__box">
              <label htmlFor="cardHolders">Card Holders</label>
              <input
                id="cardHolders"
                type="text"
                onChange={displaycaldHolders}
              />
            </div>
            <div className="form-inner__box -flex">
              <div className="form-inner__col -expiration">
                <label htmlFor="expirationMonth">Expiration Date</label>
                <select
                  name="expirationMonth"
                  id="expirationMonth"
                  defaultValue="month"
                >
                  <option value="month" disabled>
                    Month
                  </option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <select
                  name="expirationYear"
                  id="expirationYear"
                  defaultValue="year"
                >
                  <option value="year" disabled>
                    Year
                  </option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                </select>
              </div>
              <div className="form-inner__col -cvv">
                <label htmlFor="">CVV</label>
                <input type="text" maxLength={4} />
              </div>
            </div>
            <button className="form-inner__button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
