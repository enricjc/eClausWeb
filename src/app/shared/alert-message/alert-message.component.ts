import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})

export class AlertMessageComponent implements OnInit {
  @Input() titol: string;
  @Input() missatge: string;
  @Input() tipus: string;
  @Output() showAlert: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit() {
  }

  cancel(){
    this.showAlert.emit(false);
  }

}
