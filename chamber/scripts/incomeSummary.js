const xValues = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const yValues = [10326, 11022, 11991, 12098, 12243, 12546, 12768, 12990, 13129, 13892, 14434, 15062];

new Chart("incomeChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    Options: {
        legend: { display: false},
        scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
        }
    }
});