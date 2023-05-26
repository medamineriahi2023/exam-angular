import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-badge',
  templateUrl: './update-badge.component.html',
  styleUrls: ['./update-badge.component.css']
})
export class UpdateBadgeComponent implements OnInit{
    id : any;

  constructor(private activatedRoute:ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

  }



  onSubmit(value: any) {

  }

  ngOnInit(): void {
    console.log(this.id);

  }
}
