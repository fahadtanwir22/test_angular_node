import { Component, OnInit } from '@angular/core';
import { NavigationLink } from 'src/app/models/NavigationLink';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  Expanded: boolean = false;
  ApplicationLogoPath = '';
  NavigationLinks: NavigationLink[] = [
    {
      Title: 'Home',
      Link: '/home'
    },
    {
      Title: 'Subscriptions',
      Link: '/subscription'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded() {
    this.Expanded = !this.Expanded;
  }

}
