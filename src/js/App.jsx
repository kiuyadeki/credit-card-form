import React, { useEffect, useState } from "react";
import "../css/main.scss";
import cardBody from "../images/6.jpeg";
import chip from "../images/chip.png";
import visa from "../images/visa.png";

export const App = () => {
  const [number, setNumber] = useState("");
  const [cardHolders, setCardHolders] = useState("");
  const expirationMonthURL = "http://myjson.dit.upm.es/api/bins/e2q0";
  const expirationYearURL = "http://myjson.dit.upm.es/api/bins/isjw";
  const [expirationMonth, setExpirationMonth] = useState([]);
  const [expirationYear, setExpirationYear] = useState([]);
  useEffect(() => {
    fetch(expirationMonthURL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setExpirationMonth(data);
      });
  }, []);
  useEffect(() => {
    fetch(expirationYearURL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setExpirationYear(data));
  });

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

  const displaycaldHolders = () => {};

  return (
    <>
      <div className="wrapper">
        <form className="card-form" action="" method="post">
          <div className="card-item">
            <div className="card-item__side -front">
              <div className="card-item__wrapp">
                <div className="card-item__top">
                  <img src={chip} alt="" />
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
                onChange={validateNumber}
                value={number}
              />
            </div>
            <div className="form-inner__box">
              n <label htmlFor="cardHolders">Card Holders</label>
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
                  {expirationMonth.map((date, index) => {
                    return <option key={index}>{date.number}</option>;
                  })}
                </select>
                <select
                  name="expirationYear"
                  id="expirationYear"
                  defaultValue="year"
                >
                  <option value="year" disabled>
                    Year
                  </option>
                  {expirationYear.map((date, index) => {
                    return <option key={index}>{date.number}</option>;
                  })}
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
