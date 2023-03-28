import { Component, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent {

  constructor(private dataTableService: DataTableService) { }


  @Input() headers: string[] = [];
  @Input() records: any[] = [];
  @Input() title: string = '';

  getDetails(id: number) {
    this.dataTableService.getByStudentId<Course>('course', id)
    .subscribe();//data => this.records = data)
  }
}
