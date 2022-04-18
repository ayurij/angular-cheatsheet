import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {
  value: number = 0;
  inputNumber: number = 0;

  constructor(private connector: ConnectorService) {
    this.connector.numberSubject2.subscribe(data => this.value = data);  
  }

  ngOnInit(): void {
  }

  addNumber(){
    this.connector.numberSubject2.next(this.value + this.inputNumber);
  }

}
