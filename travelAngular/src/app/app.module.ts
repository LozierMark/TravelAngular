import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PlacesService } from './Services/places.service';
import { PlaceIndexComponent} from './Components/place/place-index/place-index.component';
import { PlaceDetailComponent} from './Components/place/place-detail/place-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { TagsService } from './Services/tags.service';
import { TagIndexComponent } from './Components/tag/tag-index/tag-index.component';
import { TagRequestsService } from './Services/tagRequests.service';
import { TagRequestIndexComponent } from './Components/tagRequest/tag-request-index/tag-request-index.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TagRequestCreateComponent } from './Components/tagRequest/tag-request-create/tag-request-create.component';
import { PlaceCreateComponent } from './Components/place/place-create/place-create.component';
import { PlaceEditComponent } from './Components/place/place-edit/place-edit.component';
import { PlaceDeleteComponent } from './Components/place/place-delete/place-delete.component';
import { AuthService } from './Services/auth.service';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'Home',   component: HomeComponent},
  // {
  //   path: 'places',
  //   children: [
  //     {path:'', component:PlaceIndexComponent},
  //     {path:'create',component:PlaceCreateComponent},
  //     {path:'detail/:id',component:PlaceDetailComponent},
  //     {path:'edit/:id',component:PlaceEditComponent},
  //     {path:'delete/:id',component:PlaceDeleteComponent}
  //   ]
  // },
  { path: 'places', component:PlaceIndexComponent},
  { path: 'placeCreate', component:PlaceCreateComponent},
  { path: 'placeDetail',component:PlaceDetailComponent},
  { path: 'placeEdit', component:PlaceEditComponent},
  { path: 'placeDelete',component:PlaceDeleteComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'tags' , component: TagIndexComponent},
  { path: 'tagRequests', component: TagRequestIndexComponent },
  { path: 'tagRequests/create', component: TagRequestCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceIndexComponent,
    PlaceDetailComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    TagIndexComponent,
    TagRequestIndexComponent,
    TagRequestCreateComponent,
    PlaceCreateComponent,
    PlaceEditComponent,
    PlaceDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  exports: [

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    AppRoutingModule,
    PlacesService,
    TagsService,
    TagRequestsService,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
