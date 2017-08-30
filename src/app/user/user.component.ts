import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {
  user: User;
  model: User;
  change: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser()
    .subscribe(
      data => {
        this.user = data;
      });
  }

  /*updateProfile(){
    this.userService.updateProfile(this.model.avatar, this.model.birth_date, this.model.country);
  }*/

  logout() {
    this.userService.logout();
  }

}
