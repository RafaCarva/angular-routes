import { EletronicsModule } from './eletronics.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicDetailComponent } from './eletronic-list/eletronic-detail/eletronic-detail.component';

const routes: Routes = [
  // {path: 'eletronics', component: EletronicListComponent},
  // {path: 'eletronics/:index', component: EletronicDetailComponent}
  {path: '', component: EletronicListComponent},
  {path: ':index', component: EletronicDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EletronicsRoutingModule {}
