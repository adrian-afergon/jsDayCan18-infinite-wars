import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketClient} from '../../../core/services/socket.client';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit, OnDestroy {

  population: number;
  subscription: Subscription;
  constructor(private socketClient: SocketClient) {
  }

  ngOnInit() {
    this.subscription = this.socketClient.onPopulation().subscribe( population => this.population = population);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
