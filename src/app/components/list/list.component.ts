import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datasets: any = [
    {
      data: [1, 2, 3, 4, 5, 6, 7, 0, 3, 6, 0, 9, 4, 3, 34,],
      borderColor: '#012',
      fill: false,
      label: 'quemirai',
    }
  ];
  muelles = [];

  constructor() { }

  ngOnInit() {
    moment.locale('es');
    for (let index = 0; index < 6; index++) {
      this.muelles.push({
        nombre: `Muelle ${index * Math.ceil(Math.random() * 7)}`,
        labels: this.getDates(moment().subtract(20, 'day'), moment()),
        data: [
          this.randomData()
        ]
      });
    }
  }



  randomData() {
    const data = [];
    for (let index = 0; index < 20; index++) {
      data.push(Math.ceil(Math.random() * 15));
    }
    const borderColor = this.getRandomColor();
    const label = this.getRandomLabel();
    return {
      data,
      borderColor,
      label,
      fill: false,
    };
  }
  getRandomLabel() {
    const labels = [
      'Marea',
      'Velocidad',
      'Temperatura',
      'PH',
    ];
    return labels[Math.floor(Math.random() * labels.length)]
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      const d = moment(currentDate).format('DD/MM/YY');
      dates.push(d);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }

}
