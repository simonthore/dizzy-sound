import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from '../artist-card/artist-card.component';
@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [ArtistCardComponent, CommonModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.less'
})
export class ArtistsComponent {
  // Exemple de données d'artistes
  artists = [
    {
      name: 'John Doe',
      photo: '../../assets/Vold.jpg',
      description: 'Un guitariste talentueux avec plusieurs années d\'expérience.'
    },
    {
      name: 'Jane Smith',
      photo: 'assets/craqueboulet.jpg',
      description: 'Une chanteuse exceptionnelle avec un talent pour l\'improvisation.'
    },
    {
      name: 'Le F',
      photo: 'assets/francky.jpg',
      description: 'Le sang de la mélo.'
    },
    {
      name: 'John Doe',
      photo: '../../assets/Vold.jpg',
      description: 'Un guitariste talentueux avec plusieurs années d\'expérience.'
    },
    {
      name: 'Jane Smith',
      photo: 'assets/craqueboulet.jpg',
      description: 'Une chanteuse exceptionnelle avec un talent pour l\'improvisation.'
    },
    {
      name: 'Le F',
      photo: 'assets/francky.jpg',
      description: 'Le sang de la mélo.'
    },
    {
      name: 'John Doe',
      photo: '../../assets/Vold.jpg',
      description: 'Un guitariste talentueux avec plusieurs années d\'expérience.'
    },
    {
      name: 'Jane Smith',
      photo: 'assets/craqueboulet.jpg',
      description: 'Une chanteuse exceptionnelle avec un talent pour l\'improvisation.'
    },
    {
      name: 'Le F',
      photo: 'assets/francky.jpg',
      description: 'Le sang de la mélo.'
    }
  ];
}
