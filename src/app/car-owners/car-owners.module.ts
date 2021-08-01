import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnwnerListComponent } from './ownwner-list/ownwner-list.component';
import { OwnwnerSingleViewComponent } from './ownwner-single-view/ownwner-single-view.component';
import { CarOwnersRoutingModule } from './car-owners-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    OwnwnerListComponent,
    OwnwnerSingleViewComponent
  ],
  imports: [
    CommonModule,
    CarOwnersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class CarOwnersModule { }
