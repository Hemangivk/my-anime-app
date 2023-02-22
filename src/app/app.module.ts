import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { CardTitleTruncatePipePipe } from './card-title-truncate-pipe.pipe';
import { LinechartComponent } from './linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CardTitleTruncatePipePipe,
         LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,    
NgChartsModule
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
