import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { CreateComponent } from './Create/create.component';
import { ShowComponent } from './Show/show.component';
import { DetailComponent } from './Detail/detail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Create',component:CreateComponent},
  {path:'Show',component:ShowComponent},
  {path:'Detail/:id',component:DetailComponent},
  {path:'Update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
