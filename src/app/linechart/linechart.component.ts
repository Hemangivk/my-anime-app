import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html'
})


export class LinechartComponent {
  result: any;
  arrLevel: any;
  arrValue: any;
  chart: any = [];

 

  constructor(private service: AnimeService) {
    Chart.register(...registerables);
  }
  ngOnInit() {
    this.service.getTopAnime().subscribe((res) => {
      this.result = res;
      const arrLevel: any = [];
      const arrValue: any = [];
      this.arrLevel = this.result.data.map((cyear: any) => cyear.year);
      this.arrValue = this.result.data.map((ctitle: any) => ctitle.title);
      console.log(this.arrLevel );
      console.log( this.arrValue);

      const result =  this.result.data.reduce(function (r: any, a: any) {
        r[a.year] = r[a.year] || [];        
        if (a !== null) {           
          const dataVal = a.title;
          r[a.year].push(dataVal);           
        }
        return r;
      }, Object.create(null));

      var keys = Object.keys(result).filter(Number);
      
      var values = Object.values(result)
        .map((itm: any) => {          
          return itm.length;
        });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: keys,
          datasets: [
            {
              data: values,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Anime',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
              
            },
          ],          
        },
        options:{
          responsive:true,
          maintainAspectRatio:false,  
          scales: {
            yAxis: {
              beginAtZero:true
            }
          }      
        },
        
      
      });
       
    });
  }


}
