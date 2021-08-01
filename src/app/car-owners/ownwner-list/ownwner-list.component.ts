import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-ownwner-list',
  templateUrl: './ownwner-list.component.html',
  styleUrls: ['./ownwner-list.component.scss']
})
export class OwnwnerListComponent implements OnInit {

  owners : Array<Persona> = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'edad'];

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load()
  {
    this.personaService.listarPersonas().subscribe({
      next: results => {
        console.log('Una interacción completa');
        this.owners = results;
      },
      complete: () => {
        console.log('El flujo de interacción se completo');
      },
      error: e => {
        console.log('Se generó un error: ', e);
      }
    });
  }

  onSelect(persona: Persona)
  {
    this.router.navigate(['owners', persona.id]);
  }
}
