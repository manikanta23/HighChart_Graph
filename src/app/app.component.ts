import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import { StockChart } from 'angular-highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // stockChart = new StockChart({ options });

  chart = new Chart({

    accessibility: {
      enabled: true,
      keyboardNavigation: {
        //tabThroughPoints: true,
        enabled: false
      }

    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Stacked column chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: 'white'
        }
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }],
    

  });

  

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  onKey(event) {
    console.log(event);
  }
}


  // var wide = false;
  // $('#set-div-size').click(function () {
  //   $('#container').width(wide ? 400 : 500);
  //   wide = !wide;
  // });
  // $('#reflow-chart').click(function () {
  //   chart.reflow();
  // });



  // chart: {
    //   type: 'column'
    // },  
    // title: {
    //   text: 'Stacked column chart'
    // },
    // credits: {
    //   enabled: false
    // },
    // series: [
    //   {
    //     name: 'Line 1',
    //     data: [1, 2, 3]
    //   }
    // ]


