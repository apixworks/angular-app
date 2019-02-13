import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './public/signin/signin.component';
import {SignupComponent} from './public/signup/signup.component';
import {HomeComponent} from './private/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'sign_in', pathMatch: 'full'},
    {path: 'sign_in', component: SigninComponent},
    {path: 'sign_up', component: SignupComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
