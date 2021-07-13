import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-deleteusers',
  templateUrl: './deleteusers.component.html',
  styleUrls: ['./deleteusers.component.css']
})
export class DeleteusersComponent implements OnInit {

  constructor(public el:ActivatedRoute,public direct:Router,public crud:CrudService) { }

  ngOnInit(): void {
    var id=this.el.snapshot.params["deleteid"]
     this.crud.delete(`usersrecord/${id}`).subscribe((response)=>{
      //  console.log(response)
      this.direct.navigate(["/showuserspage"])
     },(error)=>{
       console.log(error)
     })

  }

}
