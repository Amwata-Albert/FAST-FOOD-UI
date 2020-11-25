import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }

  chartOptions: {}
  Highcharts = Highcharts;



  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Meals Graph'
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credit:{
        enabled: false,
      },
      exporting: {
        enabled:true,
      },
      series: [{
          name: 'Eggs',
          data: [502, 635, 809, 947, 1402, 3634, 526]
      }, {
          name: 'Juice',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Milk',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Pizza',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Ugali',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300)
  }

}
