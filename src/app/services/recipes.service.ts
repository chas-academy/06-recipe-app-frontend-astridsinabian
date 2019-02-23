import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavedRecipe } from '../models/SavedRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


   constructor(private http: HttpClient) {

    }

  getRecipes(): Observable<SavedRecipe[]> {
    return this.http.get<SavedRecipe[]>('http://recipe-app.test/api/recipelists');
   }

  addRecipes(savedRecipe: SavedRecipe): Observable<SavedRecipe> {
     return this.http.post<SavedRecipe>('http://recipe-app.test/api/recipelists', savedRecipe);
  } 

  // deleteRecipes(id: number): Observable<{}> {
  //   // const url = `http//:recipe-app/api/recipelists/${id}`;
  //   // return this.http.delete(url);
  // } 

  // updateRecipes(savedRecipe: SavedRecipe): Observable<{}> {
  //   return this.http.put<SavedRecipe>(`http//:recipe-app/api/recipelists/${savedRecipe.id}`, savedRecipe);
  // } 


  

}
