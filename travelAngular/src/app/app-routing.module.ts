import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceIndexComponent } from './Components/place/place-index/place-index.component';
import { HomeComponent } from './Components/home/home.component';
import { PlaceDetailComponent } from './Components/place/place-detail/place-detail.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TagIndexComponent } from './Components/tag/tag-index/tag-index.component';
import { TagRequestIndexComponent } from './Components/tagRequest/tag-request-index/tag-request-index.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home',   component: HomeComponent},
  { path: 'places', component:PlaceIndexComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'tags' , component: TagIndexComponent},
  { path: 'tagRequests' , component: TagRequestIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
