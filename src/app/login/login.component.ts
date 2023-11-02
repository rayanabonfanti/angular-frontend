import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  
  doLogin() {
    this.service.login(this.username, this.password).subscribe({
      next: (data: any) => {
        if(data){
          this.router.navigate(["/home"]);      
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
