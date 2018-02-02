import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from  "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WeatherService } from './weather.service';


const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'setting', 
    component:SettingComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
      ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
