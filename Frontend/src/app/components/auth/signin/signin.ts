import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SigninService } from '../../../service/auth/signin';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  authService = inject(SigninService);
  router = inject(Router);

  form = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl('')
  });

  onSubmit() {
    const { Email, Password } = this.form.value;

    if (!Email || !Password) return;

    this.authService.login(Email, Password).subscribe({
      next: (res) => {
        console.log(res);

        // ✅ Store token
        this.authService.setToken(res.token);

        console.log( this.authService.getToken());

        // ✅ Redirect
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        alert('Login failed');
      }
    });
  }
}