import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
      {
        path:"adduserspage",
        component:AddusersComponent
      },
      {
        path:"showuserspage",
        component:ShowusersComponent
      },
      {
        path:"deleteuserspage/:deleteid",
        component:DeleteusersComponent
      },
      {
        path:"edituserspage/:editid",
        component:EditusersComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
