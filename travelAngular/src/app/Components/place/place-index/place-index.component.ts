import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/Services/places.service';
import { Place } from '../../../Models/Place';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-place-index',
  templateUrl: './place-index.component.html',
  styleUrls: ['./place-index.component.css']
})
export class PlaceIndexComponent implements OnInit {

  constructor(private _placesService: PlacesService) { }
  dataSource: MatTableDataSource<Place>
  columnNames = ['PlaceID','PlaceName'//'tags'
  ]
  ngOnInit() {   
    this._placesService.getPlaces().subscribe((places: Place[]) => {});
  }

}
