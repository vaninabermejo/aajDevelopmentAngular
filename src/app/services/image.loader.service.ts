import {Injectable} from '@angular/core';
@Injectable()
export class ImageLoaderService {

  public load(src): Promise<any>{
    return new Promise((resolve, reject)=>{
      let img = new Image();
      img.src= src;
      img.onload= function(){
        resolve('image with src' + src + 'loaded successfully');
      };
    });
  }
}
