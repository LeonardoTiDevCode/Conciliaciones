import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logoTotal = '../assets/images/Grupo_3.png';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('/panel');
  }

}
