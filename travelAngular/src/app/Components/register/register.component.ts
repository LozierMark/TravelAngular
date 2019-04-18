import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor( private _form: FormBuilder, private _authService: AuthService) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this._registerForm = this._form.group({
      Email: new FormControl,
      Password: new FormControl,
      ConfirmPassword: new FormControl,
    });
  }
  onSubmit() {
    console.log(this._registerForm.value);
    this._authService
    .register(this._registerForm.value)
    .subscribe( () => this._authService.login(this._registerForm.value));
  }
}
