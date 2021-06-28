import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    nickname: '',
    password: ''
  };

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
  }
}
