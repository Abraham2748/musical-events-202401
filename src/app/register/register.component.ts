import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { RegisterRequestBody } from '../shared/models/auth.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hasNumberValidator: ValidatorFn = (control) => {
    return control.value && !/\d/.test(control.value)
      ? { hasNumber: true }
      : null;
  };
  hasUpperValidator: ValidatorFn = (control) => {
    return control.value && !/[A-Z]/.test(control.value)
      ? { hasUpper: true }
      : null;
  };
  hasLowerValidator: ValidatorFn = (control) => {
    return control.value && !/[a-z]/.test(control.value)
      ? { hasLower: true }
      : null;
  };
  hasSpecialValidator: ValidatorFn = (control) => {
    return control.value &&
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(control.value)
      ? { hasSpecial: true }
      : null;
  };

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.hasNumberValidator,
      this.hasUpperValidator,
      this.hasLowerValidator,
      this.hasSpecialValidator,
    ]),
    documentType: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
  });

  authService = inject(AuthService);

  notifications = inject(NotificationsService);

  register() {
    const body: RegisterRequestBody = {
      documentNumber: this.registerForm.controls.documentNumber.value!,
      firstName: this.registerForm.controls.name.value!,
      lastName: this.registerForm.controls.lastName.value!,
      password: this.registerForm.controls.password.value!,
      email: this.registerForm.controls.email.value!,
      documentType: Number.parseInt(
        this.registerForm.controls.documentType.value!
      ),
      age: Number.parseInt(this.registerForm.controls.age.value!),
      confirmPassword: this.registerForm.controls.password.value!,
    };

    this.authService.register(body).subscribe((response) => {
      console.log('response', response);
      if (response && response.success) {
        // Redirect to the customer page
        console.log('Register successful');
        this.notifications.success('Registro exitoso', 'Bienvenido');
      } else {
        // Display an error notification
        console.log('Register failed');
        this.notifications.error('Registro fallido', 'Intenta otra vez');
      }
    });
  }
}
