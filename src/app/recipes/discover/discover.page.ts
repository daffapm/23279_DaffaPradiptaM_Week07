import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { DiscoverService } from './discover.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];
  data2 = 'Recommended!';
  private customColor: string;
  constructor(private discoverService: DiscoverService) {
    this.customColor = 'green'
  }

  ngOnInit() {
    this.recipes = this.discoverService.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.discoverService.getAllRecipes();
  }

  fav(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(recipe.title, 'added to favorite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('Share', recipe.title, 'to social media')
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }
}
