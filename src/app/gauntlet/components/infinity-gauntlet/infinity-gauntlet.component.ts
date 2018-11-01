import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-infinity-gauntlet',
  templateUrl: './infinity-gauntlet.component.html',
  styleUrls: ['./infinity-gauntlet.component.scss']
})
export class InfinityGauntletComponent implements OnInit {

  @Input() disabled: boolean;
  @Output() onSnap = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSnapHandler () {
    this.onSnap.emit();
  }

}
