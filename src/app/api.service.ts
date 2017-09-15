import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class APIService {
  name : string = "Name";
  email : string = "Email";
  address : string = "Address";
  phone : string = "Phone";
  companyname : string = "Company";
  User : string ="";
  UserList : object[] = [];



  constructor(private http:Http) {   
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
        console.log(result.json());
        result.json().forEach(e => {
          var datauser = { "name" : e.name, "email" : e.email, "address" : { "street" : e.address.street}, "phone" : e.phone, "company" : { "name" : e.company.name}};
          this.UserList.push(datauser);
        });
        console.log(this.UserList);
      },
      error => {console.log(error);

        
      }
     
    );

  }
  AddUser(nama,email,address,phone,company) : void {
    var id = this.UserList[this.UserList.length-1]["id"]+1;
    var userInput = { "id" : id, "name" : nama, "email" : email, "address" : {"street" : address}, "phone" : phone, "company" : {"name" : company}};
    this.UserList.push(userInput);
    console.log(this.UserList);
  }

  RemoveUser(id) : void {
    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["id"] == id) {
        this.UserList.splice(i,1);
        break;
      }
    }
    console.log(this.UserList);
  }

}
  
  
  
