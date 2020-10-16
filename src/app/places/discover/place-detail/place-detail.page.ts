import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Places } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlaces:Places;
  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) { return; }
      const placesId = paramMap.get('placeId');
      this.loadedPlaces = this.placesService.getPlaces(placesId);
    })
  }

}
