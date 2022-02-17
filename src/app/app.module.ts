import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent],
  imports: [BrowserModule, AppRoutingModule, ScheduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
