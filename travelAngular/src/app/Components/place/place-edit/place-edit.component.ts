import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../../Services/places.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Place } from 'src/app/Models/Place';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { TagsService } from 'src/app/Services/tags.service';
import { Tag } from 'src/app/Models/Tag';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})

export class PlaceEditComponent implements OnInit {
  place: Place;
  editPlaceForm: FormGroup;
  public tagService: TagsService;
  JSON = JSON;
  allTags:Tag[];
  @ViewChild("jsonOutput", { read: ElementRef }) tref:ElementRef;

    // TagsService should be singular
  constructor(private _form: FormBuilder, tagService_: TagsService, private _placeService: PlacesService, private _ar: ActivatedRoute, private _router: Router, tagService: TagsService) {
    this._ar.paramMap.subscribe(p => {
      this._placeService.getPlace(p.get('id')).subscribe((singlePlace: Place) => {
        this.place = singlePlace;
        this.createForm();
      });
    });
    this.tagService = tagService_;
  }
  ngOnInit() {
    this.tagService.getTags().subscribe((tags: Tag[])=>{
      console.log("GETTING TAGS!");
      this.allTags = tags;
      // allTags = this.allTags;
      console.log("GOT TAGS! ("+JSON.stringify(this.allTags)+")");
    });
  }

  getTags_():Tag[] {
    var k:Tag[] = [];
    if (!this.allTags) this.ngOnInit();
    console.log(JSON.stringify(this.allTags));
    for (var n of this.allTags) k.push(n);
    return k;
  }

  
  refreshTagsOutput() {
    // console.log("DOING STUFF");
    (this.tref.nativeElement as HTMLDivElement).innerHTML = JSON.stringify(this.allTags);
    // window.onload(new Event("Data"));
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
      PlaceImageUrl: form.value.PlaceImageUrl,
      Tags: this.getTagData().map(e=>{return {TagId:e,TagName:""};})
    };
    this._placeService.editPlace(editPlace)/*.subscribe(d => {
      this._router.navigate(['/places']);
    });*/
  }

  asArray(htmlC:HTMLCollection) {
    var k = [];
    for (var f in htmlC) k.push(htmlC[f]);
    return k;
  }

  getTagData() {
    var tgd:string[] = [];
    for (var k of this.asArray(document.getElementById("tagSelector").children)) tgd.push(k.tagId);
    return tgd;
  }
}
