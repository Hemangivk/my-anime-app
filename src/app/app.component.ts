import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animeList: any = [];
  chartyear: any = [];
  chartTitle: any = [];
  gridColumns = 5;
  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getTopAnime().subscribe((data: any) => {
      const response = data;
      
      this.animeList = data;
      
      const arrYear: any = [];
      const arrTitle: any = [];
      data.data.filter((itm: any) => itm.year !== null)
        .sort((a: any, b: any) => a?.year - b?.year)
        .map((item: any, idx: number) => {         
          arrYear.push(item.year);
          arrTitle.push(item.title);
        });
       console.log('arrLevel', arrYear);
       console.log('arrValue', arrTitle);
      this.chartyear = arrYear;
      this.chartTitle = arrTitle;
    });
  }
 
}
