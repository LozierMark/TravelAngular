import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagRequest } from 'src/app/Models/TagRequest';
import { TagRequestsService } from 'src/app/Services/tagRequests.service';

@Component({
  selector: 'app-tag-request-detail',
  templateUrl: './tag-request-detail.component.html',
  styleUrls: ['./tag-request-detail.component.css']
})
export class TagRequestDetailComponent implements OnInit {

  tagRequest: TagRequest;

    constructor(private _activatedRoute: ActivatedRoute, private _tagRequestService: TagRequestsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._tagRequestService.getTagRequest(routeData.get('id')).subscribe((singleTagRequest: TagRequest) => {
        this.tagRequest = singleTagRequest;
      })
    });
  }

}
