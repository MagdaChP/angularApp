import { Component, OnInit, Input } from '@angular/core';
import { Elem } from '../list';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {
  @Input() elem: Elem;
  constructor() { }

  ngOnInit() {
  }

}
