import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Result from '../entity/result';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  /**
   * upload image
   * @param image upload image
   */
  uploadImg(image: FormData): Observable<Result<string>> {
    return this.http.post<Result<string>>('/file/upload', image);
  }

  /**
   * upload images
   * @param formData image files
   */
  uploadImages(formData: FormData): Observable<Result<Map<string, string>>> {

    return this.http.post<Result<Map<string, string>>>('/file/upload/imgs', formData);
  }

}
