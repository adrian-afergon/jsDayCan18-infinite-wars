import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter();


  ngOnInit() {
  }

  public onButtonClick(event) {
    this.onClick.emit(event);
  }

}
