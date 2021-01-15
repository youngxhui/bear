import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoadMapService {

  constructor(private httpClient: HttpClient) { }
}
