import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListComponent } from './components/list/list.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'weather-chart',
    component: WeatherChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
