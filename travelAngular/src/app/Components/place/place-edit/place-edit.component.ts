import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../Services/places.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Place } from 'src/app/Models/Place';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})

export class PlaceEditComponent implements OnInit {
  place: Place;
  editPlaceForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _placeService: PlacesService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._placeService.getPlace(p.get('id')).subscribe((singlePlace: Place) => {
        this.place = singlePlace;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }

  createForm() {
    this.editPlaceForm = this._form.group({
      PlaceName: new FormControl(this.place.PlaceName),
      PlaceLocation: new FormControl(this.place.PlaceLocation),
      PlaceDescription: new FormControl(this.place.PlaceDescription),
      PlaceImageUrl: new FormControl(this.place.PlaceImageUrl)
    });
  }
  onSumbit(form) {
    const editPlace: Place = {
      PlaceName: form.value.PlaceName,
      PlaceLocation: form.value.PlaceLocation,
      PlaceDescription: form.value.PlaceDescription,
      PlaceImageUrl: form.value.PlaceImageUrl
    };
    this._placeService.editPlace(editPlace).subscribe(d => {
      this._router.navigate(['/places']);
    });
  }
}
