import { Component, OnInit, Input } from '@angular/core';
import { Elem } from '../list';
import { FormService }  from '../form.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {
  @Input() elem: Elem;
  constructor(
    private formService: FormService,
  ) { }
  ngOnInit() {
  }
  save(): void {
    this.formService.updateElem(this.elem);
  }
  
}
