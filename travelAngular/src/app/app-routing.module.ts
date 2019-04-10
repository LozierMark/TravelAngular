import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceIndexComponent } from './Components/place/place-index/place-index.component';
import { HomeComponent } from './Components/home/home.component';
import { PlaceDetailComponent } from './Components/place/place-detail/place-detail.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "places", component: PlaceIndexComponent}
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
