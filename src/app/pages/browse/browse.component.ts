import { Component } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { Person } from 'src/app/interfaces/person';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

  tableType: string | undefined;
  headers: string[] = [];
  records: any[] = [];
  title: string = '';
  constructor(private dataTableService: DataTableService) { }

  alert(message: string) {
    alert(message);
  }

  getAllBuildings() {}
  getAllCategories() {}
  getAllClassrooms() {}
  getAllCourses() {
    this.tableType = 'course';
    this.title = 'Liste des cours'
    // A hard-coder quand j'aurai décidé quelles colonnes afficher
    this.headers = Object.getOwnPropertyNames(this.c);
    this.dataTableService.getAll<Course>('course')
      .subscribe(data => this.records = data);
  }
  getAllDomains() {}
  getAllGroups() {}

  getAllPersons() {
    this.tableType = 'person';
    this.title = 'Liste des personnes'
    // A hard-coder quand j'aurai décidé quelles colonnes afficher
    this.headers = Object.getOwnPropertyNames(this.p);
    this.dataTableService.getAll<Person>('person')
      .subscribe(data => this.records = data);
  }
  
  getAllStudents() {}
  getAllTeachers() {}


  p: Person = {
    id: 0,
    categoryId: 0,
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    city: '',
    street: '',
    houseNumber: '', 
    zipcode: '',
    niss: '',
    email: '',
    phoneNumber: '',
  };

  c: Course = {
    id: 0,
    domainId: 0, 
    name: '', 
    description: '',
    isCollective: true, 
    isPrincipal: true
  }
}
