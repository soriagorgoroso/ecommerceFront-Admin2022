import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

function BarChart() {
  return (
    <>
      <p className="text-center mt-3">
        Ventas mensuales ultimo semestre (miles de pesos)
      </p>
      <div>
        <Line
          height={200}
          width={300}
          data={{
            labels: [
              "Noviembre",
              "Diciembre",
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
            ],
            datasets: [
              {
                label: "Ventas mensuales",
                data: [499, 550, 575, 629, 699, 715],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default BarChart;
