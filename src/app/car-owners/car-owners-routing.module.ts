import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnwnerListComponent } from './ownwner-list/ownwner-list.component';
import { OwnwnerSingleViewComponent } from './ownwner-single-view/ownwner-single-view.component';

const routes: Routes = [
  { path: '', component: OwnwnerListComponent },
  { path: ':id', component: OwnwnerSingleViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarOwnersRoutingModule { } 
