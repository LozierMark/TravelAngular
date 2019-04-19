import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeText: string;
  userName: string;
  loggedIn: boolean;
  title = 'travelAngular';
  
  constructor(private _authService: AuthService) {
    _authService.userLoggedIn.subscribe(() => {this.updateMessage();});
    this.loggedIn=(false);
  }
  ngOnInit() {
    this.updateMessage();
  } 
  updateMessage() {
    var k = localStorage.getItem("userName");
    if (k) {
      this.userName = k;
      this.loggedIn = true;
      this.welcomeText = `Welcome ${this.userName}`;
    } else {
      this.welcomeText = "Not Logged In";
    }


  }

}

