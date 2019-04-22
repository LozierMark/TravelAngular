import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from 'src/app/Services/tagRequests.service';
import { TagRequest } from '../../../Models/TagRequest'
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-request-index',
  templateUrl: './tag-request-index.component.html',
  styleUrls: ['./tag-request-index.component.css']
})
export class TagRequestIndexComponent implements OnInit {


  dataSource: MatTableDataSource<TagRequest>;
  columnNames = ['TagRequestName','TagRequestUserName', 'TagRequestDate', 'TagRequestPlace', 'details'];
  tagRequest: TagRequest;

  constructor(private _activatedRoute: ActivatedRoute, private _tagRequestsService: TagRequestsService) {
  // private _ar: ActivatedRoute, private _router: Router) {
  //   this._ar.paramMap.subscribe(p => {
  //     this._tagRequestsService.getTagRequest(p.get('id')).subscribe((singleTagRequest: TagRequest)=> {
  //       this.tagRequest = singleTagRequest;
      // });
    };
  
  ngOnInit() {
    this._tagRequestsService.getTagRequests().subscribe((tagRequests: TagRequest[]) => { 
      this.dataSource = new MatTableDataSource<TagRequest>(tagRequests);
    });
    };
  }



