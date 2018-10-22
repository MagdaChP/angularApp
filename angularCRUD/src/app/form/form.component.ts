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
  
  towns = ['New York', 'London', 'Cracow', 'Berlin'];
  // model = new Elem;
  submitted = false;

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
  delete(elem: Elem): void {
    this.listEl = this.listEl.filter(h => h !== elem);
    this.formService.deleteElem(elem).subscribe();
  }
  add(name: string, keyWords: string, bidAmount: number, campaignFund: number, status: boolean,  town: string, radius: number): void {
    name = name.trim();
    keyWords = keyWords.trim();
    if (!name) { return; }
    this.formService.addElem({ name, keyWords, bidAmount, campaignFund, status, town, radius } as Elem)
      .subscribe(el => {
        this.listEl.push(el);
      });
  }
  onSubmit() { this.submitted = true; }
}
