import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnwnerListComponent } from './car-owners/ownwner-list/ownwner-list.component';
import { OwnwnerSingleViewComponent } from './car-owners/ownwner-single-view/ownwner-single-view.component';
import { CommonLayoutComponent } from './common-pages/common-layout/common-layout.component';
import { LoginComponent } from './common-pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'owners', component: CommonLayoutComponent, 
    loadChildren: () => 
    import('./car-owners/car-owners.module').then((m) => m.CarOwnersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
