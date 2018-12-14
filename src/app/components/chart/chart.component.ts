import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];
  @Input() ejeX: any[] = [];
  @Input() datasets: any[] = [];
  @ViewChild('canvas') canvas: ElementRef;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      // https://www.chartjs.org/docs/latest/
      type: 'line',
      data: {
        labels: this.ejeX,
        datasets: this.datasets /* [
          {
            label: 'quemirai',
            data: [10, 20, 30, 40, 50, 60, 70, 80],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: [1, 5 , 8, 1, 4],
            borderColor: '#ffcc00',
            fill: false
          },
        ] */
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
