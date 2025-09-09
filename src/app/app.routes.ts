import { Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { EventsComponent } from '../components/events/events.component';
import { SplashScreenComponent } from '../components/splash-screen/splash-screen.component';

export const routes: Routes = [

    { path: '', redirectTo: '/splash-screen', pathMatch: 'full' },  
    { path: 'splash-screen', component: SplashScreenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'artists', component: ArtistsComponent}
  ];
