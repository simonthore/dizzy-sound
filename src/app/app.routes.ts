import { Routes } from '@angular/router';

import { ArtistsComponent } from '../components/artists/artists.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { EventsComponent } from '../components/events/events.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'artists', component: ArtistsComponent}
  ];