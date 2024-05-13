//npm install file-saver
import React from "react";
import { saveAs } from "file-saver";
import "./Price.css";

const PriceReceipt = ({
  date,
  appleCount,
  totalPrice,
  killosOfApple,
  pricePerKilogram,
}) => {
  // Prepare receipt content
  const receiptContent = `
  \n\n
    Yield Pro Receipt - Price Prediction\n\n
    -----------------------------------\n\n
    Date: ${date}\n
    Apple Count: ${appleCount}\n
    Total Price: $ ${totalPrice.toFixed(2)}\n
    Apple Weight: ${killosOfApple.toFixed(2)} Kg\n
    Predicted Apple Price for 1 Kg: $ ${pricePerKilogram.toFixed(2)}\n\n
    -----------------------------------\n\n
    Thank you for using Yield Pro!
  `;

  const handleDownload = () => {
    // Download receipt as text file
    const blob = new Blob([receiptContent], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "receipt.txt");
  };

  return (
    <div className="receipt-container">
      <div className="predict-download-icon" onClick={handleDownload}>
        {/* Add your new download icon here */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="predict-bi-download"
        >
          <path
            d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3 15.2346C3.15224 14.7446 3.35523 14.3552 3.15224 14.1522C3 14 3 13.5341 3 13.1022C3 12.6703 3 12.3377 3.15224 12.0477C3.35523 11.5554 3.74458 11.1659 4.23463 10.9629C4.60218 10.8227 5.06812 10.8227 6 10.8227H6.6M12 15V4M12 15L9 12M12 15L15 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default PriceReceipt;
