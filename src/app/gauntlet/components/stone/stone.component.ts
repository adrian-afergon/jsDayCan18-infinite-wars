import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stone} from '../../stones';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent implements OnInit {

  @Input() public stone: Stone;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  stoneClicked(event) {
    this.onClick.emit(this.stone);
  }

}
