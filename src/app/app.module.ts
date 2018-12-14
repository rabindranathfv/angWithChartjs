import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListComponent } from './components/list/list.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ListComponent,
    WeatherChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
