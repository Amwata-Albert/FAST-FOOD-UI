import { Component, OnInit,ViewChild } from '@angular/core';
import { MealsService } from 'src/app/service/meals.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]

})
export class MealsComponent implements OnInit {
  displayedColumns:string[] = ['food_id','name', 'category','price', 'action']
  dataSource;
  selectedPost;
  @ViewChild(MatSort) sort:MatSort;
  service: any;
  listdata: any;
  searchKey: string;
  // searchKey:string;


  food_id: number;
  name: string;
  photo: string;
  category: string;
  price: number;
  selectedmeal: { id: number; food_id: string; name: string; photo: string; category: string; price: number; };
  selectedMeal: { id: number; food_id: string; name: string; photo: string; category: string; price: number; };
  
  constructor(private api:MealsService,
    private dialog: MatDialog) { 
    this.getMealList();
    this.selectedPost = { id:-1, food_id: '', name: '', photo: '', category: '', price:0};

  }
  getMealList = () =>{
    this.api.getMealList().subscribe(
      //handles success
      data =>{
        //pass the result to the variable created above
        this.dataSource =data; 
        console.log(data);
      },
      //handles error
      error =>{
        console.log("The error: ",error);
      }
    )
  };

  addMeal = () =>{
    this.dialog.open(MealsComponent)
    this.dialog.open(MatDialog, {
      width: '50%',
      height:'50%',
      data: { food_id: this.food_id, name: this.name , photo: this.photo, category: this.category, price: this.price}

    });
    this.api.addMeal(this.selectedPost).subscribe(
      //handles success
      data =>{
        this.dataSource.push(data);
      },
      //handles error
      error =>{
        console.log("The error: ",error);
      }
    )
  };



  deleteMeal =()=>{
    this.api.deleteMeal(this.selectedPost.id).subscribe(
      //handles success
      data =>{
        //first retrieve the post with that id called the delete method from drf
        this.getMealList();
      },
      //handles error
      error =>{
        console.log("The error: ",error);
      }
    )
  
  };

  // addMeal(){
    // this.service.initializeFormGroup
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose =true;
    // dialogConfig.autoFocus =true;
    // this.dialog.open(MealsComponent,dialogConfig);
  // }


  ngOnInit(): void {

  }
  onSearchclear(){
    this.searchKey="";
    this.applyFilter();
  }
  applyFilter(){
    this.listdata.filitem=this.searchKey.trim().toLowerCase
  }
}
