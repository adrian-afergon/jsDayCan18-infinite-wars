import { Component, Input, OnInit } from '@angular/core';
import {Stone} from '../../stones';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent implements OnInit {

  @Input() public stone: Stone;
  constructor() { }

  ngOnInit() {}

}
