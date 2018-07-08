import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PictureModuleModule {

  id: number;
  createdAt: Date;
  name: string;
  imageUrl: string;


}
