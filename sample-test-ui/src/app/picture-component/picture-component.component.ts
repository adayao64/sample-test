import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PictureModuleModule } from '../picture-module/picture-module.module';
import { PictureServiceService } from '../picture-service.service';

@Component({
  selector: 'app-picture-component',
  templateUrl: './picture-component.component.html',
  styleUrls: ['./picture-component.component.css']
})
export class PictureComponentComponent implements OnInit {

  pictures: PictureModuleModule[];

  constructor(private router: Router, private pictureService: PictureServiceService) {

  }

  ngOnInit() {
    this.pictureService.getPictures().subscribe(
      data => {
        this.pictures = data;
      });
  }

}
