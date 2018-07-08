import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureComponentComponent } from './picture-component/picture-component.component';
const routes: Routes = [
  { path: 'pictures', component: PictureComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
