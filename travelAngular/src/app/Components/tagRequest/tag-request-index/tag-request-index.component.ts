import { Component, OnInit } from '@angular/core';
import { TagRequestsService } from 'src/app/Services/tagRequests.service';
import { TagRequest } from '../../../Models/TagRequest'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tag-request-index',
  templateUrl: './tag-request-index.component.html',
  styleUrls: ['./tag-request-index.component.css']
})
export class TagRequestIndexComponent implements OnInit {

  dataSource: MatTableDataSource<TagRequest>;
  columnNames = ['TagRequestName','TagRequestUserName', 'TagRequestDate', 'TagRequestPlace', 'Accept', 'Deny'];

  constructor(private _tagRequestsService: TagRequestsService) { }

  ngOnInit() {
    this._tagRequestsService.getTagRequests().subscribe((tagRequests: TagRequest[]) => { 
      this.dataSource = new MatTableDataSource<TagRequest>(tagRequests);
  });

  onDelete() {
    this._tagRequestsService.deleteTagRequest(this._tagRequest.TagRequestId).subscribe(() => {
      this._router.navigate(['/tagRequests']);
    });

  }
}

}
