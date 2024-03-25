import { Component, signal } from '@angular/core';

// Interfaces
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledges',
  standalone: true,
  imports: [],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss'
})
export class KnowledgesComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone do Angular'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone do CSS3'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone do HTML5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone do Javascript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone do Node.js'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone do SASS'
    },
  ])
}
