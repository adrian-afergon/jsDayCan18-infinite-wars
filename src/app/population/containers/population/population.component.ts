import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../../core/services/socket.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  population: number;
  constructor(socketService: SocketService) {
    socketService.onPopulation().subscribe( population => this.population = population);
  }

  ngOnInit() {
  }

}
