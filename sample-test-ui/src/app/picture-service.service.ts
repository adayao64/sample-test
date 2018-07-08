import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { PictureModuleModule } from './picture-module/picture-module.module';


/*@Injectable({
  providedIn: 'root'
})*/

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PictureServiceService {

  constructor(private http: HttpClient ) {}

  /*private userUrl = '/api/searchPicturelist';*/
  private userUrl = 'http://localhost:8080/api/searchPicturelist';

  public getPictures() {
    return this.http.get<PictureModuleModule[]>(this.userUrl);
  }
}
