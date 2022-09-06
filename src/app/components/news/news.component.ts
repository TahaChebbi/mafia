import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 news:any=[] 
 x = "assets/images/img_" 
  constructor() { }

  ngOnInit() {
      this.news=[{description:"descripton 1",Name:"Ronaldo",date:"25/02/2001",avatar:"assets/images/person_1.jpg",img:"assets/images/img_1.jpg"},
      {description:"descripton 2",Name:"messi",date:"25/02/2001",avatar:"assets/images/person_2.jpg",img:"assets/images/img_2.jpg"},
      {description:"descripton 3",Name:"dali",date:"25/02/2001",avatar:"assets/images/person_3.jpg",img:"assets/images/img_3.jpg"}]
  }
  
}
