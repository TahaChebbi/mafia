import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-news-items",
  templateUrl: "./news-items.component.html",
  styleUrls: ["./news-items.component.css"],
})
export class NewsItemsComponent implements OnInit {
  @Input() newsInput: any;

  constructor() {}

  ngOnInit() {}
}
