import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';


const routes: Routes = [
  {path:'create-account',component:CreateAccountComponent},
  {path:'home',component:HomeComponent},
  {path:'update-people/:_id',component:UpdatePeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
