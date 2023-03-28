import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  person: Person | undefined;
  constructor(private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getById(id)
      .subscribe(person => this.person = person);
  }
}
