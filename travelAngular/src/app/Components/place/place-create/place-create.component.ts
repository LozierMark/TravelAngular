import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../Services/places.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  placeForm: FormGroup;

  constructor(private _placeService: PlacesService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.placeForm = this._form.group({
      PlaceName: new FormControl,
      PlaceLocation: new FormControl,
      PlaceDescription: new FormControl,
      PlaceImageUrl: new FormControl
    });
  }

  onSubmit() {
    this._placeService.createPlace(this.placeForm.value).subscribe(data => {
      this._router.navigate(['/places']);
    });
  }

}
