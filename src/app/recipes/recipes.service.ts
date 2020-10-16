import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nasi_goreng_indonesia.jpg/250px-Nasi_goreng_indonesia.jpg',
      ingredients: ['Nasi', 'Telur', 'Goreng', 'Makan', 'Kenyang']
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gado-gado_in_Jakarta.JPG/250px-Gado-gado_in_Jakarta.JPG',
      ingredients: ['sayur1', 'sayur2', 'sayur3', 'sayur4', 'Bumbu kacang']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })}
  }

  deleteRecipe(recipeid: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeid;
    })
  }
}
