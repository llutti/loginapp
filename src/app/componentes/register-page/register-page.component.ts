import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  private email: string;
  private password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMsg: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        // console.log('Sucesso!!');
        // console.log(res);
        this.flashMsg.show('Usuário Criado corretamente.', { cssClass: 'alert-success', timeout: 4000 })
        this.router.navigate(['/privado']);
      })
      .catch((err) => {
        console.log('Erro!!', err);
        this.flashMsg.show(err.message, { cssClass: 'alert-danger', timeout: 4000 })

      });
  }

}
