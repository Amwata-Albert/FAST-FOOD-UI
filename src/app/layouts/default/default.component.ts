import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { MealsComponent } from 'src/app/modules/meals/meals.component';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(){ }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MealsComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

}
