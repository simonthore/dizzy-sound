import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { EventsComponent } from '../components/events/events.component';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ArtistsComponent,
    ContactComponent,
    HomeComponent,
    EventsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})


export class AppComponent implements OnInit {
  title = 'dizzy-sounds';
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/splash-screen']);
    }
  }
}
