import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    // Ir al backend y comprobar usuario
    this.authService.login()
      .subscribe(resp => {
        // Navegar hasta la app
        if (resp.id) {
          this.router.navigate(['./heroes'])
        }
      }
      )
  }

}
