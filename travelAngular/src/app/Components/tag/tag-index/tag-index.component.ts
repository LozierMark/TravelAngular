import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../Services/tags.service';
import { Tag } from '../../../Models/Tag';
// import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tag-index',
  templateUrl: './tag-index.component.html',
  styleUrls: ['./tag-index.component.css']
})
export class TagIndexComponent implements OnInit {

  tags:Tag[]
  // dataSource: MatTableDataSource<Tag>;
  // columnNames = ['TagName'];

  constructor(private _tagsService: TagsService) { }

  ngOnInit() {
    this._tagsService.getTags().subscribe((tags: Tag[]) => {
      this.tags=tags;
      // this.dataSource = new MatTableDataSource<Tag>(tags);
  });

  }
  tagDelete(id,name) {
    if (confirm("Are you sure you want to delete the tag \""+name+"\"")) {
      this._tagsService.tagDelete(id);
    }
  }
  tagCreate() {
    var name = prompt("What should the new tag be called?");
    if (name) this._tagsService.tagCreate(name);
  }
}
