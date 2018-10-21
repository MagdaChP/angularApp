import { Component, OnInit } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { Elem } from '../list';
import { FormService } from '../form.service';
import { ListEl } from '../mock-list';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  listEl: Elem[];
  selectedElem: Elem;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.getElems();
  }
  onSelect(elem: Elem): void {
    this.selectedElem = elem;
  }
  getElems(): void {
    this.formService.getElems()
      .subscribe(listEl => this.listEl = listEl);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.formService.addElem({ name } as Elem)
      .subscribe(el => {
        this.listEl.push(el);
      });
  }
}
