import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { TypeCategorie } from '../interface/type-categorie';

@Injectable()
export class MockCategorieService {

  infoCategorie: TypeCategorie[] = [
  {name: 'Categorie Abdo', class: 'abdo', routing:'/video/abdo'},
  {name: 'Categorie Cardio', class: 'cardio', routing:'/video/cardio'},
  {name: 'Categorie Fessier', class: 'fessier', routing:'/video/fessier'},
  {name: 'Toutes les videos', class: 'allVideo', routing:'/video/allVideo'},
];

getInfo(): Observable<TypeCategorie[]> {
  return Observable.of(this.infoCategorie);
}

  constructor() { }
}
