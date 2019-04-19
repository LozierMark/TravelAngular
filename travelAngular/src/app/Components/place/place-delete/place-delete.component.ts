import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/Services/places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/Models/Place';

@Component({
  selector: 'app-place-delete',
  templateUrl: './place-delete.component.html',
  styleUrls: ['./place-delete.component.css']
})
export class PlaceDeleteComponent implements OnInit {

  place: Place;

  constructor(private _placeService: PlacesService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._placeService.getPlace(p.get('id')).subscribe((singlePlace: Place) => {
        this.place = singlePlace;
      });
    });
  }

  ngOnInit() {
  }
  onDelete() {
    this._placeService.deletePlace(this.place.PlaceId).subscribe(() => {
      this._router.navigate(['/places']);
    });
  }
}
