import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceIndexComponent,
    PlaceDetailComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [

  ],
  providers: [
    PlacesService,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
