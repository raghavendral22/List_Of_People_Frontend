import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account} from '../account';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Persons:any[]=[];
  _id="";
  Name:String="";
  Age:number=0;
  Gender:String="";
  Mobilenumber:number=0;
  constructor(private accountService:AccountService,private router:Router,private http:HttpClient){
    this.getPersons()
  }
  
  getPersons(){
    this.http.get("http://localhost:2000/api/v1/persons/").subscribe((resultdata:any)=>{
      console.log(resultdata);
      this.Persons=resultdata;
    })
  }
  setUpdate(Id:number){
    this.router.navigate(['/update-people'],{queryParams:{_id:Id}})
  }

  setDelete(data:any){
    this.http.delete("http://localhost:2000/api/v1/persons/"+"/"+data._id).subscribe((resultedData:any)=>{

      console.log(resultedData);
      alert("Account Deleted");

  })
  
  

}
}
