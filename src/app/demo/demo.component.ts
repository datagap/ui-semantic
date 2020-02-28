import { Component, OnInit } from '@angular/core';

import { UiMediaService } from '@dgx/core/media';

@Component({
  selector: 'demo-home',
  templateUrl: 'demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  checked: boolean = false;
  selected: string[] = ['hello'];
  radio: string = 'radio2';
  constructor(public media: UiMediaService) {}

  ngOnInit() {}

  onChange(event: Event) {
    console.log(event);
  }
}
