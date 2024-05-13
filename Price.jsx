import React, { useState } from "react";
import "./Price.css";
import PriceMainChart from "./PriceMainChart";
import PriceMyPlayer from "./PriceMyPlayer";
import refresh from "../Price/refresh.svg";
import PriceReceipt from "./PriceReceipt";

const Price = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [killosOfApple, setKillosOfApple] = useState(null);
  const [pricePerApple, setPricePerApple] = useState(null); // New state for price per apple
  const [date, setDate] = useState("");
  const [appleCount, setAppleCount] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const date = formData.get("date");
    const appleCount = formData.get("apple_count");
    try {
      const response = await fetch("/predict", {
        method: "POST",
        body: JSON.stringify({ date, apple_count: appleCount }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTotalPrice(data.total_price);
      setPricePerApple(data.price_per_apple);
      // Calculate killos_of_apple
      const killosOfAppleValue = parseInt(appleCount) * 0.15;
      setKillosOfApple(killosOfAppleValue);
      setDate(date);
      setAppleCount(appleCount);
    } catch (error) {
      console.error("Error predicting total price:", error);
    }
  };

  // Calculate price per kilogram of apples
  const pricePerKilogram = pricePerApple ? (pricePerApple / 150) * 1000 : null;

  // Function to handle refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="predict-main-container">
      <div className="predict-How-to-use-Button">
        <PriceMyPlayer />
      </div>
      {/*Add refresh button*/}
      <div onClick={handleRefresh} style={{ cursor: "pointer" }}>
        <img src={refresh} alt="" style={{ width: "30px", height: "30px" }} />
      </div>
      <div className="top-section">
        <div className="morphing-text-container">
          {/* Include the SVG markup */}
          <svg viewBox="0 0 1320 100" className="morphing-svg">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="morphing-text"
            >
              Price Forecasting
            </text>
          </svg>
        </div>{" "}
        <p className="predict-heading-discription ">
          Welcome To Price Forecasting
        </p>
        <p className="predict-step-dicription">
          "Enter date and apple count, click 'Price Predict' button for apple
          price prediction!"
        </p>
      </div>

      <div className="predict-inline-container">
        <form onSubmit={handleSubmit} className="predict-form-container">
          <h4 className="predict-form-discription">Apple Price Predictor</h4>
          <div>
            {/*Add Receipt Downloader*/}
            {totalPrice && (
              <PriceReceipt
                date={date}
                appleCount={appleCount}
                totalPrice={totalPrice}
                killosOfApple={killosOfApple}
                pricePerKilogram={pricePerKilogram}
              />
            )}
          </div>
          {/*Get User Input*/}
          <div className="input-container">
            <label htmlFor="date" className="predict-input-date">
              <h5 className="predict-inputD">Date: &nbsp;</h5>
              <input type="date" id="date" name="date" required />
            </label>
            <label htmlFor="apple_count" className="predict-input-count">
              <h5 className="predict-inputC"> Apple Count: &nbsp;</h5>
              <input
                type="number"
                id="apple_count"
                name="apple_count"
                required
                min="1"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Price Predict"
            className="Predict-button"
          />
          {/*Display Output*/}
          <div>
            {pricePerKilogram && (
              <p className="predict-Price-per-kilogram">
                Predicted Apple Price for 1 Kg: $ {pricePerKilogram.toFixed(2)}
              </p>
            )}
          </div>
          <div className="predict-prediction">
            {totalPrice && (
              <p className="predict-Total-price">
                Total Price: $ {totalPrice.toFixed(2)}
              </p>
            )}
            {killosOfApple && (
              <p className="predict-Killos-of-apple">
                Apple Weight: {killosOfApple.toFixed(2)} Kg
              </p>
            )}
          </div>
        </form>
        {/*Display Chart*/}
        <div className="predict-connect-chart">
          <h4 className="predict-chart-discription">
            Apple Price Prediction chart
          </h4>
          <PriceMainChart />
        </div>
      </div>
    </div>
  );
};

export default Price;
