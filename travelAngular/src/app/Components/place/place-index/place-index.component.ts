import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../Services/places.service';
import { Place } from '../../../Models/Place';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-place-index',
  templateUrl: './place-index.component.html',
  styleUrls: ['./place-index.component.css']
})
export class PlaceIndexComponent implements OnInit {
  
  dataSource: MatTableDataSource<Place>;
  columnNames = ['PlaceName','PlaceLocation','#s'];

  constructor(private _placesService: PlacesService) { }

  ngOnInit() {   
    this._placesService.getPlaces().subscribe((places: Place[]) => {
      this.dataSource = new MatTableDataSource<Place>(places);
    });
  }
 
}
