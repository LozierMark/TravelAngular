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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceIndexComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
