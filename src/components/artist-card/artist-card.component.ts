import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.less'
})
export class ArtistCardComponent {
@Input() artistName!: string;
@Input() artistDescription!: string;
@Input() artistPhoto!: string;
}
