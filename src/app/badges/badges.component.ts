import {Component, OnInit} from '@angular/core';
import {BadgesService} from "../../services/badges.service";
import {Badge} from "../../models/Badge";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit{

  show = false;

  badges: Badge[];
  id: number;
  constructor(private badgesService: BadgesService) {
  }

  ngOnInit(): void {
    this.badgesService.getBadges().subscribe(b => {this.badges = b});
  }

  onclick(id: number){
    this.show = true;
    this.id = id;
  }


  cache() {
    this.show = false;
  }
}
