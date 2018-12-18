import { Component, OnInit } from '@angular/core';
import { TypeVideo } from '../interface/type-video';
import { InfoVideoService } from '../services/info-video.service';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {
typeCardio: TypeVideo[]
  constructor(private typevideoService:  InfoVideoService) { }

getCardio(){
    this.typevideoService.getCardio().subscribe(data => {
          this.typeCardio = data;
        });
}
  ngOnInit() {
    this.getCardio();
  }

}
