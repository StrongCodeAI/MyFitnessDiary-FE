import { Component } from '@angular/core';
import User from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    userName: 'johndoe',
    email: 'john.doe@example.com',
    profilePicture: 'assets/images/profile-default.svg'
  };
}
