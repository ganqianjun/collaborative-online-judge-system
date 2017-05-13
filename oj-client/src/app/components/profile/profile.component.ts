import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username : string = "Your name";
  email : string = "Your e-mail";
  lastLogin: string = "Unknown";

  constructor(@Inject('auth') private auth) {
    if ( this.auth.authenticated() ) {
      this.username = this.auth.getProfile().nickname;
      this.email = this.auth.getProfile().name;
      this.lastLogin = this.auth.getProfile().created_at;
    }
  }

  ngOnInit() {
  }

}
