import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-page-one',
  templateUrl: './private-page-one.component.html',
  styleUrls: ['./private-page-one.component.scss'],
})
export class PrivatePageOneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo() {
    this.router.navigate(['/public/page-one']);
  }
}
