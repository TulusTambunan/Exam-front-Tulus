import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private data : APIService) { }

  ngOnInit() {}

  RemoveUser(id) {
    for (var i = 0; i < this.data.UserList.length; i++) {
      if (id == this.data.UserList[i]['Id']) {
        this.data.UserList.splice(i, 1);
      }
    }
  }
}

 
  






