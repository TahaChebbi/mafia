import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SearchFilterService } from './../../services/search-filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  score={}
  searchMatchForm:FormGroup
  matches:any=[]
  constructor(private searchFilterService:SearchFilterService,
    private route:Router) { }

  ngOnInit() {
    console.log(this.score);

    
    this.searchFilterService.display(this.score).subscribe(
      (data)=>{
          this.matches=data.var
          
          
      }
    )
  }
  


}
