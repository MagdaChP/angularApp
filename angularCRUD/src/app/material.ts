import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule,MatRadioModule, FormsModule, ReactiveFormsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, FormsModule, ReactiveFormsModule],
})

export class MaterialModule { }