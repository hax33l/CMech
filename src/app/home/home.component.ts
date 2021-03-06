import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registration_number: string = '';
  key: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  title = 'CMech';

  onSearch() {
    if (this.registration_number.length == 0 || this.key.length == 0)
      return
    this.router.navigate(['tracking/' + this.registration_number.replace(/\s/g, "") + '/' + this.key])
  }
}
