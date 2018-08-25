import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  private email: string;
  private password: string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        // console.log('Sucesso!!');
        // console.log(res);
        this.router.navigate(['/privado']);
      })
      .catch((err) => {
        console.log('Erro!!', err);
      });
  }

}
