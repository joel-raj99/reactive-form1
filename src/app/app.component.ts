import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordPatternValidator } from './validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveform3';
  loginForm: FormGroup;

  constructor(private formBulider: FormBuilder) {
    this.loginForm = this.formBulider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,passwordPatternValidator()]]
    });
  }

  
  
  onSubmit() {
    if (this.loginForm.valid) {
      // Your login logic here
      console.log('Login submitted:', this.loginForm.value);
      alert('user successfully')
    }
  }

}
