import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
   public userrecords:any;
  constructor(public crud:CrudService,public el:ActivatedRoute,public direct:Router) { }

  ngOnInit(): void {
   var id=this.el.snapshot.params["editid"]
  //  console.log(id)
  this.crud.select(`usersrecord/${id}`).subscribe((response:any)=>{
    // console.log(response)
    this.userrecords=response
  },(error)=>{
    console.log(error)
  })
  }
  editdata(a:any,b:any,c:any,d:any){
    var id=this.el.snapshot.params["editid"]
    this.crud.update(`usersrecord/${id}`,{
      title:a.value,
      description:b.value,
      status:c.value,
      date:d.value
    }).subscribe((response)=>{
      // console.log(response)
      this.direct.navigate(["/showuserspage"])
    },(error)=>{
      console.log(error)
    })
  }
}
