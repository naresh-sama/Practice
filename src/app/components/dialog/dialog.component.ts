import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  UserData: any={};
  action: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.UserData  = {...this.data.data};
    this.action = this.data.action;
  } 

  onNoClick() {
    this.dialogRef.close({event:"close"});
  }
  close(){
    this.dialogRef.close({event:this.action,data:this.UserData});
  }

}
