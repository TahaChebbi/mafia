import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-player-by-id',
  templateUrl: './display-player-by-id.component.html',
  styleUrls: ['./display-player-by-id.component.css']
})
export class DisplayPlayerByIdComponent implements OnInit {
  player: any = {};
  playerForm: FormGroup;
  id:any;
  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private route:Router,
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.displayPlayerById(this.id).subscribe(
      (data) => {
      
      
      this.player = data.player;

    }
    );
  }

  Edit() {

    this.playerService.editPlayer(this.player).subscribe()
    this.route.navigate(["admin"])
    

  }
}
