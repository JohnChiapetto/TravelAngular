import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../Models/Place';
import { Observable } from 'rxjs';
import { Tag } from '../Models/Tag';

const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _http: HttpClient) { }

  getPlaces() {
    return this._http.get(`${ApiUrl}/place`);
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer $(localStorage.getItem('id_token')}`);
  }

  getPlace(id: string) {
    var k = (this._http.get(`${ApiUrl}/place/${id}`));
    k.subscribe(function(e) {console.log(e)});
    return k;
  }

  createPlace(place: Place,tags: string[]) {
    console.log("Sending Create Request to Server");
    place.Tags=tags.map(function(e) { return { TagId:e,TagName:"" }; });
    console.log(this.getHeaders());
    console.log(localStorage.getItem("id_token"));
    return this._http.post(`${ApiUrl}/place`, place, {headers:this.getHeaders()});
  }

  editPlace(place: Place) {
    return this._http.put(`${ApiUrl}/place`, place, { headers: this.getHeaders()});
  }
  deletePlace(id:number) {
    return this._http.delete(`${ApiUrl}/place/${id}`, { headers: this.getHeaders() });
  }
}


