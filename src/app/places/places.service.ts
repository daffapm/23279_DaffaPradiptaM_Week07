import { Injectable } from '@angular/core';
import { Places } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Places[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Apartmentingurgaon.JPG',
      price: 500
    },
    {
      id: 'p2',
      title: 'Serpong Apartment',
      description: 'Apartment for Serpong People',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Cove%2C_Punggol_Field.JPG',
      price: 600
    },
    {
      id: 'p3',
      title: 'JKT Apartment',
      description: 'Apartment for Jakarta People',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/St_James_Town1.jpg',
      price: 700
    }
  ];
  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getPlaces(placesId: string){
    return {...this.places.find(places => {
      return places.id === placesId;
    })}
  }

  getFirstIndex(){
    return {...this.places.find(places => {
      return places.id === 'p1';
    })}
  }


  deletePlaces(placeId: string){
    this.places = this.places.filter(places => {
      return places.id !== placeId;
    })
  }
}
