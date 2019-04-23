import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from '../../../Services/tagRequests.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/Services/places.service';
import { Place } from 'src/app/Models/Place';

@Component({
  selector: 'app-tag-request-create',
  templateUrl: './tag-request-create.component.html',
  styleUrls: ['./tag-request-create.component.css']
})
export class TagRequestCreateComponent implements OnInit {

  tagRequestForm: FormGroup;
  PlaceId : string;

  constructor(private route: ActivatedRoute, private _placeService: PlacesService, private _tagRequestsService: TagRequestsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.PlaceId = this.route.snapshot.params.PlaceId
    console.log(`GOT PlaceId of "${this.PlaceId}`);
  }

  createForm() {
    this.tagRequestForm = this._form.group({
      TagRequestName: new FormControl,
      TagRequestUserName: new FormControl,
      TagRequestDate: new FormControl,
      TagRequestPlace: new FormControl
    });
  }
  onSubmit() {
    this._tagRequestsService.createTagRequest(this.tagRequestForm.value, this.PlaceId).subscribe(data => {
      this._router.navigate(['/tagRequests']);
    });
  }
}
