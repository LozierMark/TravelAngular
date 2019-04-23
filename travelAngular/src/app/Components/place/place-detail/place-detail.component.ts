import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Place } from 'src/app/Models/Place';
import { PlacesService } from 'src/app/Services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place: Place;
  placeImageUrl_: string;
  placeImageStyle: string;
  JSON = JSON;

  constructor(private _activatedRoute: ActivatedRoute, private _placeService: PlacesService) { }

  ngOnInit() {
    var k = null;
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._placeService.getPlace(routeData.get('id')).subscribe((singlePlace: Place) => {
        this.place = singlePlace;
        this.placeImageUrl_ = this.place.PlaceImageUrl;
        this.placeImageStyle = `background-image: url(${this.placeImageUrl_});`;
      });
    });
  }


}

