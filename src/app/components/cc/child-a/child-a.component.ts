import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
   
  value: number = 0;
  observable: Observable<number>;
  inputNumber: number = 0;

  constructor(private connector: ConnectorService) {
    this.observable = this.connector.getNumberObservable();
    this.observable.subscribe(data => this.value = data);
  }

  ngOnInit(): void {
  }

  addNumber(){
    this.connector.addNumber(this.inputNumber);
  }

}
