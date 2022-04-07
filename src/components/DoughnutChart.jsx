import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  return (
    <>
      <p className="text-center mt-3">Ventas por barrio de entrega (%)</p>
      <div>
        <Doughnut
          height={300}
          width={300}
          data={{
            labels: [
              "Ciudad Vieja",
              "Palermo",
              "Tres Cruces",
              "Buceo",
              "Malvin",
              "Otros",
            ],
            datasets: [
              {
                label: "(%)",
                data: [10, 23, 16, 7, 11, 33],
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
            maintainAspectRatio: false,
            /* scales: {
            yAxes: {
              ticks: {
                beginAtZero: false,
              },
            },
          }, */
          }}
        />
      </div>
    </>
  );
}

export default DoughnutChart;
