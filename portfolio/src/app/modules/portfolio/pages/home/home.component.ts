import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgesComponent } from '../../components/knowledges/knowledges.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    KnowledgesComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
