import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent {
  showBackButton = true;

  constructor() {}

} 