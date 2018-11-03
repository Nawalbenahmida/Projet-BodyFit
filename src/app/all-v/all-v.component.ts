import { Component, OnInit } from '@angular/core';
import { TypeVideo } from '../interface/type-video';
import { InfoVideoService } from '../services/info-video.service';

@Component({
  selector: 'app-all-v',
  templateUrl: './all-v.component.html',
  styleUrls: ['./all-v.component.css']
})
export class AllVComponent implements OnInit {
typeAll: TypeVideo[]
  constructor(private typevideoService:  InfoVideoService) { }
getAll(){
  this.typevideoService.getAll().subscribe((typeAll: TypeVideo[]) => this.typeAll = typeAll);
}
  ngOnInit() {
    this.getAll();
  }

}
