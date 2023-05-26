import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Badge} from "../../models/Badge";

@Component({
  selector: 'app-badge-info',
  templateUrl: './badge-info.component.html',
  styleUrls: ['./badge-info.component.css']
})
export class BadgeInfoComponent {
    @Input() info :Badge;
    @Output() emitter: EventEmitter<boolean> = new EventEmitter()

  cache() {
    this.emitter.emit(false);
  }
}
