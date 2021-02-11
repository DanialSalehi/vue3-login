<template>
  <div
    style="background-image: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 30%, rgb(51, 51, 51));"
  >
    <br />
    <div style="margin: 0px 0px 0px 25%; width: 50%; ">
      <canvas id="myChart2" width="4" height="4"></canvas>
    </div>
  </div>
</template>

<script>
var Chart = require('chart.js');

export default {
  mounted() {
    this.createChart2();
  },
  methods: {
    createChart2() {
      var ctx = document.getElementById('myChart2');
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['مرد', 'زن'],
          datasets: [
            {
              label: '# ',
              data: [40, 60],
              backgroundColor: ['rgb(198, 157, 78)', 'rgb(0, 157, 78)'],
              borderColor: ['rgb(198, 157, 78)', 'rgb(0, 157, 78)'],
              cutoutPercentage: 80
            }
          ]
        },
        options: {
          cutoutPercentage: 80,
          tooltips: {
            mode: 'x'
          },
          scales: {
            xAxes: [
              { ticks: { fontColor: '#fff' }, gridLines: { display: false } }
            ],
            yAxes: [
              {
                ticks: { display: false },
                gridLines: { display: false }
              }
            ]
          }
        }
      });
      myChart;
    }
  }
};
</script>

<style>
.column {
  float: left;
  width: 33.33%;
  margin-left: 10%;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
}
.button {
  border-radius: 20px;
  border: 1px solid rgba(235, 208, 54, 0.897);
  background-color: #2b87ff00;
  color: #ffffff;
  font-size: 12px;
  width: 20%;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* transition: transform 80ms ease-in; */
}
</style>
