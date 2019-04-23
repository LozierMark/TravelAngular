import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from 'src/app/Services/tagRequests.service';
import { TagRequest } from '../../../Models/TagRequest'
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/Services/places.service';
import { Place } from 'src/app/Models/Place';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-tag-request-index',
  templateUrl: './tag-request-index.component.html',
  styleUrls: ['./tag-request-index.component.css']
})
export class TagRequestIndexComponent implements OnInit {


  dataSource: MatTableDataSource<TagRequest>;
  columnNames = ['TagRequestName', 'TagRequestDate', 'TagRequestPlace', 'buttons'];
  tagRequest: TagRequest;
  counter: number = 0;

  counterPlusPlus() { return this.counter++; }

  constructor(private _activatedRoute: ActivatedRoute, private _placeService: PlacesService, private _tagRequestsService: TagRequestsService) {
  // private _ar: ActivatedRoute, private _router: Router) {
  //   this._ar.paramMap.subscribe(p => {
  //     this._tagRequestsService.getTagRequest(p.get('id')).subscribe((singleTagRequest: TagRequest)=> {
  //       this.tagRequest = singleTagRequest;
  // });
  };

  denyTagRequest(id:string) {
    console.log("DENYING REQUEST "+id);
    return this._tagRequestsService.deleteTagRequest(id);
  }

  acceptTagRequest(id:string) {
    /* Should be singular */
    return this._tagRequestsService.acceptTagRequest(id);
  }

  getPlaceName(pid:string):string {
    var vkr;
    this._placeService.getPlace(pid).subscribe(e=>vkr=e);
    return (vkr as Place).PlaceName;
  }

  ngOnInit() {
    this._tagRequestsService.getTagRequests().subscribe((tagRequests: TagRequest[]) => { 
      this.dataSource = new MatTableDataSource<TagRequest>(tagRequests);
    });
  }
}



