import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from '../../../core/services/socket.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit, OnDestroy {

  population: number;
  subscription: Subscription;
  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.subscription = this.socketService.onPopulation().subscribe( population => this.population = population);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
