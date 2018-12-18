import { Component, OnInit } from '@angular/core';
import { CategorieService  } from '../services/categorie.service';
import { TypeCategorie } from '../interface/type-categorie';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  infoCategorie: TypeCategorie[]

  constructor(private categorieService: CategorieService , public authService: AuthService ) { }
  getInfo() {
  this.categorieService.getInfo().subscribe(data => {
        this.infoCategorie = data;
      });
}

  ngOnInit() {
    this.getInfo();
  }



}
