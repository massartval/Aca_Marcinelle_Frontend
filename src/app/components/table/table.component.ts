import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() headers: string[] = [];
  @Input() records: any[] = [];
  @Input() title: string = '';

  //constructor(private dataTableService: DataTableService) { }

  // // Solution temporaire : nouvel objet de type Person pour pouvoir récupérer les attributs même en cas de liste vide (voir ligne commentée en bas du fichier)
  // p: Person = {
  //   id: 0,
  //   addressId: 0,
  //   categoryId: 0,
  //   firstName: '',
  //   lastName: '',
  //   birthDate: new Date(),
  //   niss: '',
  //   email: '',
  //   phone: '',
  //   address: undefined
  // };

  // ngOnInit(): void {
  //   this.getAll();
  //   this.attributes = Object.getOwnPropertyNames(this.p);
  // }
  // getAll(): void {
  //   this.dataTableService.getAll<Person>('person').subscribe({
  //     next: (data) => {
  //       this.records = data;
  //     },
  //     complete: () => {
  //       //this.attributes = Object.getOwnPropertyNames(this.persons[0]);
  //     }
  //   });
  // }
}
