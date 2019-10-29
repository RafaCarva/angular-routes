import { MaterialModule } from './../material.module';
import { EletronicsRoutingModule } from './eletronics-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicDetailComponent } from './eletronic-list/eletronic-detail/eletronic-detail.component';



@NgModule({
  declarations: [EletronicListComponent, EletronicDetailComponent],
  imports: [
    CommonModule,
    EletronicsRoutingModule,
    MaterialModule
  ]
})
export class EletronicsModule { }
