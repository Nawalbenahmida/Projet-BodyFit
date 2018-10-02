import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
   getVideo(): string {
    const categorie = this.route.snapshot.paramMap.get('categorie');
    const video = '../../assets/video/' + categorie + '.mp4';
    return video;
   }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
