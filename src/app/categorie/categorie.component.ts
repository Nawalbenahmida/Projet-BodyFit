import { Component, OnInit } from '@angular/core';
import { MockCategorieService  } from '../services/mock-categorie.service';
import { TypeCategorie } from '../interface/type-categorie';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  infoCategorie: TypeCategorie[]

  constructor(private categorieService: MockCategorieService , public authService: AuthService ) { }
  getInfo() {
  this.categorieService.getInfo().subscribe((infoCategorie: TypeCategorie[]) => this.infoCategorie = infoCategorie);
}

  ngOnInit() {
    this.getInfo();
  }

  logout() {
    this.authService.logout();
  }

}
