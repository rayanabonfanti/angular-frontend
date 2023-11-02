import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });

login(username:string,password:string){
  let endpoint = environment.endpoint.login;
  const headers = new HttpHeaders({ 
  'Content-Type': 'application/json',
  'Authorization': 'Basic ' + btoa(username + ':' + password)
  });
  return this.http.get(endpoint,{headers})
}

  getAllCustomers() {
    let endpoint = environment.endpoint.getAllCustomers;
    return  this.http.get(endpoint,{headers: this.headers});
  }
}
