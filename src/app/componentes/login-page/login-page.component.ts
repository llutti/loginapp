import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    console.log('Executar onSubmitLogin');

    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        console.log('Sucesso!!', res);
        this.router.navigate(['/privado']);
      })
      .catch((err) => {
        console.log('Erro!!', err);
        // this.router.navigate(['/login']);
      });
  }
}
