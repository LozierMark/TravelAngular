import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TagsService } from '../../../Services/tags.service'; // Bad Naming Convention
import { Tag } from 'src/app/Models/Tag';
// import { }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public allTags:Tag[];
  public JSON = JSON;
  @ViewChild("jsonOutput", { read: ElementRef }) jsonOut:ElementRef;

  constructor(private _tagService:TagsService) { }

  ngOnInit() {
    console.log("CAN YOU HEAR ME?!");
    this._tagService.getTags().subscribe((tags:Tag[])=>{
      this.allTags = tags;
    });
  }

  refreshJSON() {
    (this.jsonOut.nativeElement as HTMLDivElement).innerHTML = JSON.stringify(this.allTags);
    window.onload(new Event("data"));
  }

}
