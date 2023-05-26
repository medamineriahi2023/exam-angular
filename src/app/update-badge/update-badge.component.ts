import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BadgesService} from "../../services/badges.service";
import {Badge} from "../../models/Badge";

@Component({
  selector: 'app-update-badge',
  templateUrl: './update-badge.component.html',
  styleUrls: ['./update-badge.component.css']
})
export class UpdateBadgeComponent implements OnInit{
    id : any;

  constructor(private activatedRoute:ActivatedRoute,
              private badgeService: BadgesService,
              private route: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

  }



  onSubmit(value: Badge) {
    value.id = this.id;
    this.badgeService.updateBadge(this.id , value).subscribe(b => this.route.navigate(['/' , '/']) );
  }

  ngOnInit(): void {

  }
}
