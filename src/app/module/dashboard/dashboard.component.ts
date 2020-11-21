import { Component, OnInit } from '@angular/core';
import { DahsboardService } from 'src/app/modules/dahsboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  dataSource = [];
  
  constructor(private dashboardService: DahsboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart()
    this.cards = this.dashboardService.cards()
    this.pieChart = this.dashboardService.pieChart()


  }

}
