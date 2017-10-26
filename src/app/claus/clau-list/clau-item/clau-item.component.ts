import { Component, OnInit, Input } from '@angular/core';
import { AlertAssignarClauComponent } from './modal-assignar-clau-item.component';

import { Clau } from '../../clau.model';
import { ClausService } from '../../claus.service';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-clau-item',
  templateUrl: './clau-item.component.html',
  styleUrls: ['./clau-item.component.css']
})
export class ClauItemComponent implements OnInit {
  @Input() clau: Clau;
  @Input() index: number;
  @Input() sid: string;

  constructor(private clausService: ClausService,
    private dialogService: DialogService) { }

  ngOnInit() {
  }

  onChange(index: number) {
    this.dialogService.addDialog(AlertAssignarClauComponent,
      {
        title: 'Assignació de claus',
        message: 'Selecciona el nou propietari',
        indexClau: index
      });
  }
}
