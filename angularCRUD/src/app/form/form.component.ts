import { Component, OnInit } from '@angular/core';
import {MDCTextField} from '@material/textfield';
import { Elem } from '../list';
import { ListEl } from '../mock-list';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  listEl = ListEl;
  selectedElem: Elem;
  
  constructor() { }
  
  ngOnInit() {
    
  }
  onSelect(elem: Elem): void {
    console.log('klikam');
    this.selectedElem = elem;
    console.log(elem);
  }

}
