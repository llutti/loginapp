import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private isLogin: boolean;
  private userName: string;
  private userEmail: string;
  private userPhoto: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        this.userPhoto = auth.photoURL;
      }
      else {
        this.isLogin = false;
        this.userName = '';
        this.userEmail = '';
        this.userPhoto = '';
      }
    })
  }

  onClickLogout() {
    this.authService.logout();
  }

}
