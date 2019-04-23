import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceIndexComponent } from './Components/place/place-index/place-index.component';
import { PlaceDetailComponent } from './Components/place/place-detail/place-detail.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TagIndexComponent } from './Components/tag/tag-index/tag-index.component';
import { TagRequestIndexComponent } from './Components/tagRequest/tag-request-index/tag-request-index.component';
import { HomeComponent } from './Components/home/home.component';
import { TagRequestCreateComponent } from './Components/tagRequest/tag-request-create/tag-request-create.component';
import { PlaceCreateComponent } from './Components/place/place-create/place-create.component';
import { PlaceEditComponent } from './Components/place/place-edit/place-edit.component';
import { PlaceDeleteComponent } from './Components/place/place-delete/place-delete.component';
import { SearchComponent } from './Components/place/search/search.component'
import { TagRequestDetailComponent } from './Components/tagRequest/tag-request-detail/tag-request-detail.component';
import { TagRequestDeleteComponent } from './Components/tagRequest/tag-request-delete/tag-request-delete.component';

const routes = [
  { path: 'placeSearch', component:SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tags' , component: TagIndexComponent },
  { path: 'tagRequests', component: TagRequestIndexComponent },
  { path: 'tagRequests/create', component: TagRequestCreateComponent },
  { path: 'tagRequests/detail/:id', component: TagRequestDetailComponent },
  { path: 'tagRequests/delete/:id', component: TagRequestDeleteComponent},
  { path: 'places', component: PlaceIndexComponent },
  { path: 'placeDetail/:id', component: PlaceDetailComponent },
  { path: 'placeCreate', component: PlaceCreateComponent },
  { path: 'placeEdit/:id', component: PlaceEditComponent },
  { path: 'placeDelete/:id', component: PlaceDeleteComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
