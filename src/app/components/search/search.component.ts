import { SearchService } from './../../services/search.service';

import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
team:any={}
searchTeamForm:FormGroup;
matches:any
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    
  }

  search(){
  
    
      this.searchService.searchMatch(this.team).subscribe(
        (data)=>{
          this.matches=data.matchFound;
        }
      )
      
  }
}
