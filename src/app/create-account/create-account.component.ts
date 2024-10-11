import { Component } from '@angular/core';
import {Account} from '../account';
import { AccountService } from '../account.service';
import {concat, timeout} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl:'./create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  Name:String="";
  Age:number=0;
  Gender:String="";
  Mobilenumber:number=0;

  accountCreate=false;
  constructor(private accountService:AccountService,private router:Router,private http:HttpClient){}

  create(){
    let bodyData={
      "Name":this.Name,
      "Age":this.Age,
      "Gender":this.Gender,
      "Mobilenumber":this.Mobilenumber
  
    };
    


    this.http.post("http://localhost:2000/api/v1/persons/",bodyData,{responseType:'text'}).subscribe((resultedData:any)=>{

      console.log(resultedData);
      this.accountCreate=true;
      alert("Account Created");
      setTimeout(()=>{
        this.goToHome()
      },2000)

      this.Name='';
      this.Age=0;
      this.Gender='';
      this.Mobilenumber=0;


      
    })
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  
}

