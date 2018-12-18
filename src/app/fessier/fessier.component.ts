import { Component, OnInit } from '@angular/core';
import { TypeVideo } from '../interface/type-video';
import { InfoVideoService } from '../services/info-video.service';

@Component({
  selector: 'app-fessier',
  templateUrl: './fessier.component.html',
  styleUrls: ['./fessier.component.css']
})
export class FessierComponent implements OnInit {
typeFessier: TypeVideo[]
  constructor(private typevideoService:  InfoVideoService) { }
  getFessier(){
      this.typevideoService.getFessier().subscribe(data => {
            this.typeFessier = data;
          });
  }
  ngOnInit() {
    this.getFessier();
  }

}
