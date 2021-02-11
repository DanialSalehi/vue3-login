<template>
  <div
    style="background-image: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 30%, rgb(51, 51, 51));"
  >
    <br />
    <div style="margin: 0px 0px 0px 25%; width: 50%; ">
      <canvas id="myChart3" width="4" height="4"></canvas>
    </div>
    <div>
      <h3 class="button" @click="setWeeklyChartClick">Weekly</h3>
      <h3 class="button" @click="setdailyChartClick">Daily</h3>
    </div>
  </div>
</template>

<script>
var Chart = require('chart.js');

export default {
  data() {
    return {
      weeklyChartData: {
        labels: [
          ['08', 'farvardin'],
          ['09', 'farvardin'],
          ['10', 'farvardin'],
          ['11', 'farvardin'],
          ['12', 'farvardin'],
          ['13', 'farvardin'],
          ['14', 'farvardin']
        ],
        datasets: [
          {
            label: '# ',
            data: [12, 19, 4, 5, 8, 3, 6],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)'
            ],
            borderWidth: 0,
            lineTension: 0
          }
        ]
      },
      dailyChartData: {
        labels: [
          ['08', 'farvardin'],
          ['09', 'farvardin'],
          ['10', 'farvardin'],
          ['11', 'farvardin'],
          ['12', 'farvardin'],
          ['13', 'farvardin'],
          ['14', 'farvardin']
        ],
        datasets: [
          {
            label: '# ',
            data: [6, 3, 4, 14, 8, 19, 12],
            backgroundColor: ['rgba(0, 99, 132, 0.2)'],
            borderColor: [
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)',
              'rgb(198, 157, 78)'
            ],
            borderWidth: 0,
            lineTension: 0
          }
        ]
      }
    };
  },
  mounted() {
    this.createChart3(this.weeklyChartData);
  },
  methods: {
    createChart3(data) {
      var ctx = document.getElementById('myChart3');
      var myChart = new Chart(ctx, {
        type: 'line',
        data,
        options: {
          tooltips: {
            mode: 'x'
          },
          scales: {
            xAxes: [],
            yAxes: []
          }
        }
      });
      myChart;
    },
    setWeeklyChartClick() {
      this.createChart3(this.weeklyChartData);
    },
    setdailyChartClick() {
      this.createChart3(this.dailyChartData);
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
