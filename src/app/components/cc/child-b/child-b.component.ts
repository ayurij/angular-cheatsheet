import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  value: number = 0;
  observable: Observable<number>;
  inputNumber: number = 0;

  constructor(private connector: ConnectorService) {
    this.observable = this.connector.getNumberObservable();
    this.observable.subscribe(data => this.value = data);
  }

  ngOnInit(): void {
  }

  substractNumber(){
    this.connector.substractNumber(this.inputNumber);
  }

}
