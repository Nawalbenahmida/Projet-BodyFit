import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { TypeVideo } from '../interface/type-video';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoVideoService {

 abdoUrl = 'http://localhost:8080/video/category/1';
 cardioUrl = 'http://localhost:8080/video/category/2';
 fessierUrl = 'http://localhost:8080/video/category/3';
 allVideoUrl = 'http://localhost:8080/video';

  // typeAbdo: TypeVideo[] = [
  //   {class: 'img1', block: 'block1',  video: 'https://www.youtube.com/embed/l0EIkTZpHvw', desc:'7 minutes ABS intense !'},
  //   {class: 'img2', block: 'block2',  video: 'https://www.youtube.com/embed/6EwSGMrpueM', desc:'7 minutes de gainage '},
  //   {class: 'img3', block: 'block3',  video: 'https://www.youtube.com/embed/joC8jsRTOYA', desc:'7 minutes ABS'},
  //   {class: 'img4', block: 'block4',  video: 'https://www.youtube.com/embed/LebPal5gKrc', desc:'7 exercices ABS'},
  //   {class: 'img5', block: 'block5',  video: 'https://www.youtube.com/embed/RI_YNrDYTFA', desc:'7 minutes ABS'},
  //
  // ];
  //
  // typeCardio: TypeVideo[] = [
  //   {class: 'img1', block: 'block1',  video: 'https://www.youtube.com/embed/obiX6uGNCEc', desc:'7 minutes de cardio'},
  //   {class: 'img2', block: 'block2',  video: 'https://www.youtube.com/embed/NE_HqVQIAAs', desc:'Cardio brule graisse extreme'},
  //   {class: 'img3', block: 'block3',  video: 'https://www.youtube.com/embed/tnzb9MrvSvo', desc:'7 minutes intense'},
  //   {class: 'img4', block: 'block4',  video: 'https://www.youtube.com/embed/0PET7imkXWU', desc:'7 exercices de cardio'},
  //   {class: 'img5', block: 'block5',  video: 'https://www.youtube.com/embed/l0EIkTZpHvw', desc:'7 minutes ABS intense !'},
  //
  // ];
  //
  // typeFessier: TypeVideo[] = [
  //     {class: 'img2', block: 'block2',  video: 'https://www.youtube.com/embed/P2tXlQ-xTMQ', desc:'7 minutes pour avoir des fesses de Jen Selter'},
  //   {class: 'img1', block: 'block1',  video: 'https://www.youtube.com/embed/Sf4vSfwyyag', desc:'7 minutes fesses bombées'},
  //   {class: 'img3', block: 'block3',  video: 'https://www.youtube.com/embed/oLayhiYhkCM', desc:'Fess express'},
  //   {class: 'img4', block: 'block4',  video: 'https://www.youtube.com/embed/IJSb0IjNA8w', desc:'Fesses bombées et musclées'},
  //   {class: 'img5', block: 'block5',  video: 'https://www.youtube.com/embed/0PET7imkXWU', desc:'7 exercices de cardio'},
  //
  // ];
  //
  // typeAll: TypeVideo[] = [
  //   {class: 'img1', block: 'block1',  video: 'https://www.youtube.com/embed/l0EIkTZpHvw', desc:'7 minutes ABS intense !'},
  //   {class: 'img2', block: 'block2', video: 'https://www.youtube.com/embed/6EwSGMrpueM', desc:'7 minutes de gainage '},
  //   {class: 'img3', block: 'block3',  video: 'https://www.youtube.com/embed/joC8jsRTOYA', desc:'7 minutes ABS'},
  //   {class: 'img4', block: 'block4',  video: 'https://www.youtube.com/embed/LebPal5gKrc', desc:'7 exercices ABS'},
  //   {class: 'img5', block: 'block5',  video: 'https://www.youtube.com/embed/RI_YNrDYTFA', desc:'7 minutes ABS'},
  //   {class: 'img6', block: 'block6',   video: 'https://www.youtube.com/embed/obiX6uGNCEc', desc:'7 minutes de cardio'},
  //   {class: 'img7', block: 'block7',  video: 'https://www.youtube.com/embed/NE_HqVQIAAs', desc:'Cardio brule graisse extreme'},
  //   {class: 'img8', block: 'block8',   video: 'https://www.youtube.com/embed/tnzb9MrvSvo', desc:'7 minutes intense'},
  //   {class: 'img9', block: 'block9',  video: 'https://www.youtube.com/embed/0PET7imkXWU', desc:'7 exercices de cardio'},
  //   {class: 'img10', block: 'block10', video: 'https://www.youtube.com/embed/l0EIkTZpHvw', desc:'7 minutes ABS intense !'},
  //   {class: 'img11', block: 'block11', video: 'https://www.youtube.com/embed/P2tXlQ-xTMQ', desc:'7 minutes pour avoir des fesses de Jen Selter'},
  //   {class: 'img12', block: 'block12',  video: 'https://www.youtube.com/embed/Sf4vSfwyyag', desc:'7 minutes fesses bombées'},
  //   {class: 'img13', block: 'block13',  video: 'https://www.youtube.com/embed/oLayhiYhkCM', desc:'Fess express'},
  //   {class: 'img14', block: 'block14',  video: 'https://www.youtube.com/embed/IJSb0IjNA8w', desc:'Fesses bombées et musclées'},
  //     {class: 'img15', block: 'block15',  video: 'https://www.youtube.com/embed/0PET7imkXWU', desc:'7 exercices de cardio'},
  //
  //
  // ];

  constructor( public http: HttpClient) { }

getAbdo() {
    return this.http.get<TypeVideo[]>(this.abdoUrl);
}

getCardio() {
  return this.http.get<TypeVideo[]>(this.cardioUrl);
}

getFessier() {
  return this.http.get<TypeVideo[]>(this.fessierUrl);
}

getAll(): Observable<TypeVideo[]> {
  return this.http.get<TypeVideo[]>(this.allVideoUrl);
}

}
