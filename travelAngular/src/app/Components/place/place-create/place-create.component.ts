import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../../Services/places.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TagsService } from 'src/app/Services/tags.service';
import { Tag } from 'src/app/Models/Tag';

var allTags:Tag[];

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  private _placeForm: FormGroup;
  tagService: TagsService;
  JSON = JSON;
  allTags:Tag[] = allTags;
  @ViewChild("jsonOutput", { read: ElementRef }) tref:ElementRef;

  constructor(private _form: FormBuilder, private _placeService: PlacesService,  private _router: Router,tagService: TagsService) {
    this.createForm();
    this.tagService = tagService;
   }

  ngOnInit() {
    this.tagService.getTags().subscribe((tags: Tag[])=>{
      console.log("GETTING TAGS!");
      this.allTags = tags;
      allTags = this.allTags;
      console.log("GOT TAGS! ("+JSON.stringify(this.allTags)+")");
    });
  }

  getTags_():Tag[] {
    var k:Tag[] = [];
    if (!allTags) this.ngOnInit();
    console.log(JSON.stringify(allTags));
    for (var n of allTags) k.push(n);
    return k;
  }
  refreshTagsOutput() {
    // console.log("DOING STUFF");
    (this.tref.nativeElement as HTMLDivElement).innerHTML = JSON.stringify(this.allTags);
    // window.onload(new Event("Data"));
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

  onSubmit() {
    var tags = this.getTagData();
    this._placeService.createPlace(this._placeForm.value,tags).subscribe(data => {
      this._router.navigate(['/places']);
    });
  }

}
