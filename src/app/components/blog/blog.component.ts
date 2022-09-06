import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    articles:any=[];
  constructor() { }

  ngOnInit() {
    this.articles=[{id:1,title:"title1",description:"Description 1",img:"",author:"taha",date:"08/01/2001"},
    {id:2,title:"title2",description:"Description 2",img:"",author:"ali",date:"08/01/2001"},
    {id:3,title:"title3",description:"Description 3",img:"",author:"aymen",date:"08/01/2001"},
    {id:4,title:"title4",description:"Description 4",img:"",author:"dali",date:"08/01/2001"},
    {id:5,title:"title5",description:"Description 5",img:"",author:"lina",date:"08/01/2001"},]
  }

}
