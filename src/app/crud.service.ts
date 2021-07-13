import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public serverpath="http://localhost:3000/"
  constructor(public http:HttpClient) { }
  select(keyname:any){
    return this.http.get(this.serverpath+keyname)
  }
  insert(keyname:any,record:any){
    return this.http.post(this.serverpath+keyname,record)
  }
  update(keyname:any,record:any){
    return this.http.put(this.serverpath+keyname,record)
  }
  delete(keyname:any){
    return this.http.delete(this.serverpath+keyname)
  }
}
