import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  username : string = "";
  email : string = "";
  lastLogin: string = "";

  constructor(@Inject('auth') private auth) {
    if ( this.auth.authenticated() ) {
      this.username = this.auth.getProfile().nickname;
      // If user sign up without social account, the e-mail will show in 'name'
      this.email = this.auth.getProfile().email || this.auth.getProfile().name;
      this.lastLogin = this.auth.getProfile().created_at;
    }
  }

  ngOnInit() {
  }

}
