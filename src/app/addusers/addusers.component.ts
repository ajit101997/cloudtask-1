import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  constructor(public crud:CrudService,public direct:Router) { }

  ngOnInit(): void {
  }
  adddata(a: any, b: any, c: any, d: any) {
    if(a.value!="" && b.value!=="" && c.value!=="" && d.value!==""){
      var record={
        title:a.value,
        description:b.value,
        status:c.value,
        date:d.value
      }
       this.crud.insert("usersrecord",record).subscribe((response)=>{
        //  console.log(response)
        this.direct.navigate(["/showuserspage"])
       },(error)=>{
         console.log(error)
       })
    }
      
   }
}
