import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrl: './update-people.component.css'
})
export class UpdatePeopleComponent {
  _id="";
  Name:String="";
  Age:number=0;
  Gender:String="";
  Mobilenumber:number=0;
  AccountUpdate=false;
constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router){
  this.route.params.subscribe(params=>{
    this._id=params['_id']
  })
  
}
    Update(){
      let bodyData={
        "Name":this.Name,
        "Age":this.Age,
        "Gender":this.Gender,
        "Mobilenumber":this.Mobilenumber
    
      };
  
      this.http.put("http://localhost:2000/api/v1/persons"+"/"+this._id,bodyData,{responseType:'text'}).subscribe((resultedData:any)=>{
  
        console.log(resultedData);
        this.AccountUpdate=true;
        alert("Account Updated");
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
