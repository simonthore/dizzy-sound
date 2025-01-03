import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import videojs from 'video.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnChanges, AfterViewInit {
  videos: any[] = [];
  responsiveOptions: any[] = [];
  currentPlayer: any = null;
  currentVideoIndex: number = -1; // Gérer l'index de la vidéo actuelle

  @ViewChild('videoPlayer', { static: false }) videoElement!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videos = [
      {
        title: 'Soul Muse',
        url: 'https://www.youtube.com/watch?v=1YE5x-Zs2PA',
      },
      {
        title: 'Cannonball ft. Loïs Hammel & Hazy Gaze',
        url: 'https://www.youtube.com/watch?v=mxurFHXpl08&ab_channel=DizzySounds',
      },
      {
        title: 'Dizzy Pattern / Snowtime',
        url: 'https://www.youtube.com/watch?v=PC0D8uSrFns&ab_channel=DizzySounds',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.currentPlayer) {
      this.currentPlayer.pause(); // Met en pause l'ancien lecteur
    }
  }

  ngAfterViewInit() {
    if (this.videoElement) {
      console.log(
        'Video element initialized:',
        this.videoElement.nativeElement
      );
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    const videoId = this.getVideoIdFromUrl(url);
    const safeUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1'; // Autoplay pour YouTube
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }

  getVideoIdFromUrl(url: string): string {
    const regex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
  }

  initializePlayer(videoElement: HTMLVideoElement) {
    if (this.currentPlayer) {
      this.currentPlayer.pause(); // Met en pause l'ancien lecteur
      this.currentPlayer.dispose(); // Désinitialise l'ancien lecteur
    }

    // Si c'est une vidéo YouTube dans un iframe
    if (videoElement.tagName === 'IFRAME') {
      const videoUrl = videoElement.src;
      const safeUrl = this.getSafeUrl(videoUrl); // Inclut autoplay dans l'URL
      videoElement.src = safeUrl as any;
    } else {
      // Pour les vidéos vidéo.js
      this.currentPlayer = videojs(videoElement, {
        controls: true,
        autoplay: true, // Activer l'autoplay ici
        preload: 'auto',
        muted: true, // Mettez la vidéo en sourdine pour que l'autoplay fonctionne
      });

      this.currentPlayer.ready(() => {
        this.currentPlayer.play(); // Démarre la vidéo automatiquement après qu'elle soit prête
      });
    }

    return this.currentPlayer;
  }

  onVideoChange(index: number) {
    if (this.currentPlayer && this.currentVideoIndex !== index) {
      // Si l'index change, mettez en pause et désinitialisez le lecteur actuel
      this.currentPlayer.pause();
      this.currentPlayer.dispose();
    }

    // Mémorise l'index de la vidéo actuelle
    this.currentVideoIndex = index;
  }
}
