import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    userList:any
  constructor(private userService:UserService,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.userService.getUserLit().subscribe(res=>this.userList=res);
  }
  updateData(action:any,data:any){
   let userData = {
    data: data,
    action: action
  }
   const dialogRef =this.dialog.open(DialogComponent, {
    width: '500px',
    data: userData,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result.event && result.event == 'edit') {
     this.updateRowData(result.data);
   } else if (result.event && result.event == 'delete') {
     this.deleteRowData(result.data);
   }
 });
  }
  deleteRowData(user: any) {
    this.userService.deleteContact(user.id).subscribe(data=>{
      if(data){
        this.getUser()
      }
    })
  }
  updateRowData(data: any) {
    this.userService.editContact(data).subscribe(res=>{
      if(res){
        this.getUser();
      }
    })
  }

}
