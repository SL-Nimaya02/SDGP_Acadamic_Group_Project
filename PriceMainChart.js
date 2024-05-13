import "./Price.css";
import YearComparisonChart from "../Price/PriceYearComChart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement
);

function Chart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  const [xAxisLabel, setXAxisLabel] = useState("Month");
  const [showComparisonChart, setShowComparisonChart] = useState(false);

  useEffect(() => {
    const updateChartData = (month) => {
      let newData = [];
      let newLabels = [];

      switch (month) {
        case "january":
          newData = [
            0.66, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.63, 0.63, 0.63,
            0.63, 0.63, 0.63, 0.63, 0.62, 0.62, 0.62, 0.62, 0.63, 0.62, 0.63,
            0.63, 0.63, 0.63, 0.63, 0.64, 0.63, 0.64, 0.64, 0.65,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Jan ${i + 1}`);
          setXAxisLabel("January");
          break;
        case "february":
          newData = [
            0.65, 0.65, 0.66, 0.66, 0.67, 0.67, 0.68, 0.68, 0.69, 0.69, 0.69,
            0.7, 0.7, 0.71, 0.72, 0.72, 0.73, 0.73, 0.73, 0.73, 0.74, 0.74,
            0.74, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75,
          ];
          newLabels = Array.from({ length: 29 }, (_, i) => `Feb ${i + 1}`);
          setXAxisLabel("February");
          break;
        case "march":
          newData = [
            0.75, 0.75, 0.75, 0.75, 0.74, 0.74, 0.74, 0.74, 0.74, 0.73, 0.73,
            0.73, 0.72, 0.72, 0.72, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71,
            0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Mar ${i + 1}`);
          setXAxisLabel("March");
          break;
        case "april":
          newData = [
            0.72, 0.72, 0.72, 0.72, 0.72, 0.73, 0.72, 0.73, 0.73, 0.73, 0.73,
            0.73, 0.74, 0.73, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.73, 0.74,
            0.73, 0.73, 0.73, 0.73, 0.73, 0.73, 0.73, 0.72,
          ];
          newLabels = Array.from({ length: 30 }, (_, i) => `Apr ${i + 1}`);
          setXAxisLabel("April");
          break;
        case "may":
          newData = [
            0.72, 0.72, 0.72, 0.72, 0.71, 0.71, 0.71, 0.71, 0.71, 0.7, 0.7, 0.7,
            0.7, 0.69, 0.69, 0.69, 0.68, 0.68, 0.68, 0.68, 0.67, 0.67, 0.67,
            0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.65,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `May ${i + 1}`);
          setXAxisLabel("May");
          break;
        case "june":
          newData = [
            0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65,
            0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.64,
            0.64, 0.64, 0.64, 0.63, 0.63, 0.63, 0.63, 0.62,
          ];
          newLabels = Array.from({ length: 30 }, (_, i) => `Jun ${i + 1}`);
          setXAxisLabel("June");
          break;
        case "july":
          newData = [
            0.62, 0.62, 0.62, 0.62, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61,
            0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.62,
            0.62, 0.63, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Jul ${i + 1}`);
          setXAxisLabel("July");
          break;
        case "august":
          newData = [
            0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65,
            0.65, 0.65, 0.65, 0.64, 0.64, 0.64, 0.64, 0.64, 0.63, 0.63, 0.63,
            0.63, 0.62, 0.62, 0.62, 0.62, 0.62, 0.61, 0.61, 0.61,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Aug ${i + 1}`);
          setXAxisLabel("August");
          break;
        case "september":
          newData = [
            0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.63,
            0.63, 0.63, 0.64, 0.64, 0.65, 0.65, 0.66, 0.67, 0.67, 0.68, 0.68,
            0.69, 0.69, 0.7, 0.7, 0.7, 0.71, 0.71, 0.72,
          ];
          newLabels = Array.from({ length: 30 }, (_, i) => `Sep ${i + 1}`);
          setXAxisLabel("September");
          break;
        case "october":
          newData = [
            0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.71,
            0.71, 0.7, 0.7, 0.7, 0.7, 0.69, 0.69, 0.69, 0.68, 0.68, 0.67, 0.67,
            0.67, 0.66, 0.66, 0.66, 0.66, 0.65, 0.65, 0.65,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Oct ${i + 1}`);
          setXAxisLabel("October");
          break;
        case "november":
          newData = [
            0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.64, 0.65, 0.64, 0.65,
            0.64, 0.64, 0.64, 0.64, 0.65, 0.64, 0.65, 0.64, 0.64, 0.65, 0.64,
            0.65, 0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65,
          ];
          newLabels = Array.from({ length: 30 }, (_, i) => `Nov ${i + 1}`);
          setXAxisLabel("November");
          break;
        case "december":
          newData = [
            0.65, 0.66, 0.65, 0.66, 0.66, 0.66, 0.66, 0.66, 0.67, 0.67, 0.67,
            0.67, 0.67, 0.68, 0.67, 0.68, 0.68, 0.68, 0.68, 0.68, 0.68, 0.67,
            0.68, 0.67, 0.67, 0.67, 0.67, 0.67, 0.66, 0.66, 0.66,
          ];
          newLabels = Array.from({ length: 31 }, (_, i) => `Dec ${i + 1}`);
          setXAxisLabel("December");
          break;
        default:
          newData = [
            0.66, 0.65, 0.75, 0.72, 0.72, 0.66, 0.62, 0.65, 0.61, 0.72, 0.65,
            0.65,
          ];
          newLabels = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          setXAxisLabel("Month");
      }

      setChartData({
        labels: newLabels,
        datasets: [
          {
            label: `Predict  price  for one apple ${
              month ? "in " + month : ""
            } - 2024`,
            data: newData,
            borderColor: "rgb(0, 128, 0)",
            backgroundColor: "rgba(0, 128, 0, 0.4)",
          },
        ],
      });
    };

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: xAxisLabel,
          },
        },
        y: {
          title: {
            display: true,
            text: "Price",
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });

    updateChartData(selectedMonth);
    const resizeListener = () => {
      if (window.myChart) {
        window.myChart.resize();
      }
    };

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [selectedMonth, xAxisLabel]);

  const toggleComparisonChart = () => {
    setShowComparisonChart(!showComparisonChart);
  };

  return (
    <div className="Predict-chart">
      <div className="predict-chart-size">
        {/* Conditionally render the appropriate chart based on showComparisonChart state */}
        {showComparisonChart ? (
          <div className="predict-YearComparisonChart">
            <YearComparisonChart />
          </div>
        ) : (
          <div className="chart-container">
            <Line options={chartOptions} data={chartData} />
          </div>
        )}
      </div>
      <div className="predict-chart-buttons">
        {/* Button to toggle between Default Chart and Comparison Chart */}
        <button
          className="predict-default-button"
          onClick={toggleComparisonChart}
        >
          {showComparisonChart ? "Back" : "Comparison Chart"}
        </button>
        <select
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="predict-month-button"
          hidden={showComparisonChart} // Disable the dropdown when Comparison Chart is displayed
        >
          <option value="">Select-Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
    </div>
  );
}

export default Chart;
