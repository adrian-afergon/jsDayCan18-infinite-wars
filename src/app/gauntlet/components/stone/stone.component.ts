import { Component, Input, OnInit } from '@angular/core';

interface Stone {
  id: string;
  name: string;
  description: string;
  image: string;
  equipped: boolean;
}

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent implements OnInit {

  @Input() public stone: Stone;
  constructor() { }

  ngOnInit() {
    this.stone = {
      id: '1',
      name: 'Space Stone',
      description: 'Limitless manipulation of space, allowing for teleportation, dimensional manipulation, creation of wormholes, etc.',
      image: 'assets/infinite-stones/space-stone.png',
      equipped: true
    };
  }

}
