import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
  public userrecord:any;
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    this.crud.select("usersrecord").subscribe((response)=>{
      this.userrecord=response
    },(error)=>{
      console.log(error)
    })
  }

}
