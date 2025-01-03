import { Component, Host, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  constructor() {
    console.log('Header component initialized');
  }

  sectionIds = ['home', 'events', 'contact', 'artists'];

  @HostListener('window:scroll', ['$event'])
  onScroll(events: Event) {
    this.updateActiveLink();
  }

  ngAfterViewInit() {
    // Ajout de la classe 'active' pour le lien "Home" par défaut
    this.setActiveLink('home');

    // Vous pouvez ajouter un délai pour vous assurer que tout est chargé
    setTimeout(() => {
      this.updateActiveLink();
    }, 100); // Le délai de 100ms peut être ajusté si nécessaire
  }

  updateActiveLink() {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < this.sectionIds.length; i++) {
      const section = document.getElementById(this.sectionIds[i]);
      const link = document.getElementById(`${this.sectionIds[i]}Link`);

      if (section && link) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionBottom - 50
        ) {
          link.classList.add('active');
          console.log('active link:', link);
        } else {
          link.classList.remove('active');
          console.log('inactive link:', link);
        }
      }
    }
  }
  setActiveLink(sectionId: string) {
    const link = document.getElementById(`${sectionId}Link`);
    if (link) {
      link.classList.add('active');
      console.log(`${sectionId} link set as active`);
    }
  }
}
