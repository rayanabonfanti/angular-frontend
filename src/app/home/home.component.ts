import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: RestapiService) { }

  ngOnInit() {
  }

  doGetAllCustomers() {
    this.service.getAllCustomers().subscribe({
      next: (data: any) => {
        if(data){
          alert('Data get all customers success!');
          console.log("Data get all customers success!");      
        } else {
          alert('Json Invalid - Data Error');
          console.log("Data Error");      
        }
      },
      error: (error:any) => {
        alert('Error 500');
        console.log("Error 500");    
      }
    });
  }

}
