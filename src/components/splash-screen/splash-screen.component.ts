import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.less']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redirige vers la page d'accueil après 5 secondes
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }
}
