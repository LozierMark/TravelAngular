import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home',   component: HomeComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
