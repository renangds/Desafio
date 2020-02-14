import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditRoutingModule } from './edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class EditModule { }
