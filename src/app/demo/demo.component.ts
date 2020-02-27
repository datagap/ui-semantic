import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  checked: boolean = false;
  selected: string[] = ['hello'];
  radio: string = 'radio2';
  constructor() {}

  ngOnInit() {}

  onChange(event: Event) {
    console.log(event);
  }
}
