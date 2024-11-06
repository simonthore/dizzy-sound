import { Routes } from '@angular/router';

import { ArtistsComponent } from '../components/artists/artists.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { EventsComponent } from '../components/events/events.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'artists', component: ArtistsComponent },
];
