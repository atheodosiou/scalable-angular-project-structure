import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-page-one',
  templateUrl: './public-page-one.component.html',
  styleUrls: ['./public-page-one.component.scss'],
})
export class PublicPageOneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo() {
    this.router.navigate(['/private/page-one']);
  }
}
