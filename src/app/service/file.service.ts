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
  uploadImg(image: string): Observable<Result<string>> {
    return this.http.post<Result<string>>('/', {});
  }

  /**
   * todo 这里还有bug
   * upload images
   * @param files image files
   * @param type upload file type
   */
  uploadImages(files: FormData, type: string): Observable<Result<Map<string, string>>> {
    const header = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    const httpOption = {headers: header};
    return this.http.post<Result<Map<string, string>>>('/file/upload/imgs', {files, type}, httpOption);
  }

}
