import { Component, OnInit } from '@angular/core';
import { TypeVideo } from '../interface/type-video';
import { InfoVideoService } from '../services/info-video.service';

@Component({
  selector: 'app-abdo',
  templateUrl: './abdo.component.html',
  styleUrls: ['./abdo.component.css']
})
export class AbdoComponent implements OnInit {
 typeAbdo: TypeVideo[]
  constructor(private typevideoService:  InfoVideoService) { }
  getAbdo(){
    this.typevideoService.getAbdo().subscribe(data => {
          this.typeAbdo = data;
        });
  }

  ngOnInit() {
   this.getAbdo();
  }

}
