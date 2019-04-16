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

  _placeForm: FormGroup;

  constructor(private _placeService: PlacesService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this._placeForm = this._form.group({
      PlaceName: new FormControl,
      PlaceLocation: new FormControl,
      PlaceDescription: new FormControl,
      PlaceImageUrl: new FormControl,
      Tags:[]
    });
  }

  onSubmit() {
    console.log("It's Working");
    this._placeService.createPlace(this._placeForm.value).subscribe(data => {
      this._router.navigate(['/places']);
    });
  }

}
