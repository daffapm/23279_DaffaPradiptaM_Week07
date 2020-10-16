import { Component, OnInit } from '@angular/core';
import { Places } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Places[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getAllPlaces();
  }

}
