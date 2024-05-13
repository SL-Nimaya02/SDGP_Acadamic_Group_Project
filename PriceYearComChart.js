import React from "react";
import { Line } from "react-chartjs-2";
import "./Price.css";

const YearComparisonChart = () => {
  // Define chart data
  const chartData = {
    labels: [
      "23-Jan",
      "23-Feb",
      "23-Mar",
      "23-Apr",
      "23-May",
      "23-Jun",
      "23-Jul",
      "23-Agu",
      "23-Sep",
      "23-Nov",
      "23-Dec",
      "24-Jan",
      "24-Feb",
      "24-Mar",
      "24-Apr",
      "24-May",
      "24-Jun",
      "24-Jul",
      "24-Agu",
      "24-Sep",
      "24-Nov",
      "24-Dec",
    ], // Years
    datasets: [
      {
        label: "2023-Actual Price",
        data: [
          "0.58",
          "0.62",
          "0.79",
          "0.73",
          "0.73",
          "0.65",
          "0.62",
          "0.61",
          "0.80",
          "0.74",
          "0.65",
          "0.64",
        ], // Prices for each year
        borderColor: "rgb(13, 180, 9)", // Light green border color
        backgroundColor: "rgba(13, 180, 99, 0.2)",
      },
      {
        label: "Predict Price",
        data: [
          "0.66",
          "0.65",
          "0.75",
          "0.72",
          "0.73",
          "0.66",
          "0.63",
          "0.64",
          "0.61",
          "0.71",
          "0.65",
          "0.65",
          "0.66",
          "0.65",
          "0.75",
          "0.72",
          "0.72",
          "0.66",
          "0.62",
          "0.65",
          "0.61",
          "0.72",
          "0.65",
          "0.65",
        ], // Prices for each year
        borderColor: "rgb(25, 132, 99)", // Green color
        backgroundColor: "rgba(25, 132, 99, 0.2)", // Green color with opacity
      },
    ],
  };

  // Define chart options
  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Year Comparison",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };

  return (
    <div className="predict-YearComparisonChart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default YearComparisonChart;
