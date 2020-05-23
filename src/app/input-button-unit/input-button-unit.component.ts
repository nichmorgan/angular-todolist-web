import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';
  constructor() { }

  ngOnInit(): void { }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
