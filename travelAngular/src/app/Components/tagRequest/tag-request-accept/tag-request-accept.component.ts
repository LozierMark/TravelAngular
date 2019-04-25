import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from 'src/app/Services/tagRequests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TagRequest } from 'src/app/Models/TagRequest';

@Component({
  selector: 'app-tag-request-accept',
  templateUrl: './tag-request-accept.component.html',
  styleUrls: ['./tag-request-accept.component.css']
})
export class TagRequestAcceptComponent implements OnInit {

  tagRequest: TagRequest;

  constructor(private _tagRequestService: TagRequestsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._tagRequestService.getTagRequest(p.get('id')).subscribe((singleTagRequest: TagRequest) => {
        console.log("I SHOULD BE DOING THIS PART FIRST!");
        this.tagRequest = singleTagRequest;
        console.log("HEY! I'm DOIN STUFF!");
        this.onAccept();
      });
    });
  }
  ngOnInit() {
  }

  onAccept() {
    this._tagRequestService.acceptTagRequest(this.tagRequest.TagRequestId).subscribe(() => {
      this._router.navigate(['/tagRequests']);
    });
  }
}