import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMsg: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    console.log('Executar onSubmitLogin');

    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.flashMsg.show('Usuário Logado corretamente.', { cssClass: 'alert-success', timeout: 4000 })
        this.router.navigate(['/privado']);
      })
      .catch((err) => {
        console.log('Erro!!', err);
        this.flashMsg.show(err.message, { cssClass: 'alert-danger', timeout: 4000 })
        // this.router.navigate(['/login']);
      });
  }
}
