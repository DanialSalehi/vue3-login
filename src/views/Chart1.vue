<template>
  <div
    style="background-image: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 30%, rgb(51, 51, 51));"
  >
    <br />
    <div style="margin: 0px 0px 0px 25%; width: 50%; ">
      <canvas id="myChart" width="4" height="4"></canvas>
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
    this.createChart();
  },
  methods: {
    createChart() {
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [['<20', '28%'], '21-25', '26-30', '31-35', '36-40', '41<'],
          datasets: [
            {
              label: '# ',
              data: [12, 19, 3, 5, 2, 3],
              // backgroundColor: [
              //   'rgba(255, 99, 132, 0.2)',
              //   'rgba(54, 162, 235, 0.2)',
              //   'rgba(255, 206, 86, 0.2)',
              //   'rgba(75, 192, 192, 0.2)',
              //   'rgba(153, 102, 255, 0.2)',
              //   'rgba(255, 159, 64, 0.2)'
              // ],
              borderColor: [
                'rgb(198, 157, 78)',
                'rgb(198, 157, 78)',
                'rgb(198, 157, 78)',
                'rgb(198, 157, 78)',
                'rgb(198, 157, 78)',
                'rgb(198, 157, 78)'
              ],
              borderWidth: 20,
              order: 10,
              barPercentage: 0.15
            }
          ]
        },
        options: {
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
