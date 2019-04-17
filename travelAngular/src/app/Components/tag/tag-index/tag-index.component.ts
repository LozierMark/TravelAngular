import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../Services/tags.service';
import { Tag } from '../../../Models/Tag';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tag-index',
  templateUrl: './tag-index.component.html',
  styleUrls: ['./tag-index.component.css']
})
export class TagIndexComponent implements OnInit {

  dataSource: MatTableDataSource<Tag>;
  columnNames = ['TagName'];

  constructor(private _tagsService: TagsService) { }

  ngOnInit() {
    this._tagsService.getTags().subscribe((tags: Tag[]) => {
      this.dataSource = new MatTableDataSource<Tag>(tags);
  });

  }
}
