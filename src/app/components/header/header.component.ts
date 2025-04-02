import { Component, Input } from '@angular/core';
import User from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isHomePage: boolean = false;
  
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    profilePicture: 'assets/images/profile-default.svg'
  };
}
