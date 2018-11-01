import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoneModel} from '../../viewmodel/Stone.model';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent implements OnInit {

  @Input() public stone: StoneModel;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  stoneClicked() {
    this.onClick.emit(this.stone.id);
  }

}
