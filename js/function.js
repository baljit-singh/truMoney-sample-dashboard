var lchart = document.getElementById("lineChart").getContext("2d");

var myLineChart = new Chart(lchart, {
	type: "line",
	data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"],
    datasets: [
                {
                    label: "Worst",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "#CFA76E",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.17 , 0.20 , 0.25 , 0.31 , 0.37 , 0.44 , 0.52 , 0.59 , 0.72 , 0.80 , 0.90 , 1.02 , 1.12 , 1.22 , 1.31 , 1.41 , 1.51 , 1.62],
                    spanGaps: false,
                },
                {
                    label: "Average",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "#30AD23",
                    borderColor: "#30AD23",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#30AD23",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,102,112,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02 , 0.02],
                    spanGaps: false,
                },
                {
                    label: "Best",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "#9CFF88",
                    // borderColor: "#30AD23",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    // pointBorderColor: "#30AD23",
                    // pointBackgroundColor: "#fff",
                    // pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,102,112,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02 , 0.1 , 0.17 , 0.25 , 0.31 , 0.38 , 0.46 , 0.54, 0.57 , 0.64 , 0.7 , 0.75 , 0.9 , 1.1 , 1.4 , 1.7 , 2 , 2.45],
                    spanGaps: false,
                }
              ], 
        },
  options : {
        scales: {
          yAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Value(In Rupees)',
            },
            ticks: {
             min: 0,
             max: 5,
             stepSize: 1,
             suggestedMin: 0.5,
             suggestedMax: 5.5,
             callback: function(label, index, labels) {
               switch (label) {
                 case 0:
                   return '0';
                 case 1:
                   return '20000000';
                 case 2:
                   return '40000000';
                 case 3:
                   return '60000000';
                 case 4:
                   return '80000000';
                 case 5:
                   return '100000000';
               }
             }
           }
          }]
        }
        

    } 
 
});

var dchartOne = document.getElementById("doughnutChartOne").getContext("2d");

var myDoughnutChart = new Chart(dchartOne, {
    type: 'doughnut',
    data: {
      labels: [
        "Debt%",
        "Equity%"
    ],
    datasets: [
        {
            data: [80, 20],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
            ]
        }]
    },
    
});

var dchartTwo = document.getElementById("doughnutChartTwo").getContext("2d");

var myDoughnutChart = new Chart(dchartTwo, {
    type: 'doughnut',
    data: {
      labels: [
        "Debt%",
        "Equity%"
    ],
    datasets: [
        {
            data: [40, 60],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
            ]
        }]
    },
    
});

var dchartThree = document.getElementById("doughnutChartThree").getContext("2d");

var myDoughnutChart = new Chart(dchartThree, {
    type: 'doughnut',
    data: {
      labels: [
        "Debt%",
        "Equity%"
    ],
    datasets: [
        {
            data: [20, 80],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
            ]
        }]
    },
    
});
