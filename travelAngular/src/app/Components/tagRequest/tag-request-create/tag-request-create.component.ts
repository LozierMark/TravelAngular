import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from '../../../Services/tagRequests.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tag-request-create',
  templateUrl: './tag-request-create.component.html',
  styleUrls: ['./tag-request-create.component.css']
})
export class TagRequestCreateComponent implements OnInit {

  tagRequestForm: FormGroup;
  PlaceId : string;

  constructor(private _tagRequestsService: TagRequestsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
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
