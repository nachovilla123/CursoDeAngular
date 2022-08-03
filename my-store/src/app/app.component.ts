import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {

  }


  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'Nacho',
      email: 'nacho@mail.com',
      password: '1212'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  login(){ this.authService.login('nacho@mail.com','1212')
    .subscribe(rta => {
      this.token = rta.access_token;
    });
  }

  getProfile(){
    this.authService.getProfile(this.token)
    .subscribe(profile =>{
      console.log(profile);
    });
  }
}
