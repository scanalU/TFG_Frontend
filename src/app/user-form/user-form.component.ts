import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  genders = ['Male', 'Female',
            'Rather Not Say', 'Custom'];

  model = new User(18, 'Dr IQ', this.genders[0], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User(42, '', '');
  }
}

var password = document.getElementById("password"), 
confirm_password = document.getElementById("confirm_password");
