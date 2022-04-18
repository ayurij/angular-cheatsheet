import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
  styleUrls: ['./child-e.component.css']
})
export class ChildEComponent implements OnInit {

  message: string = ''

  constructor(private connector : ConnectorService) { 
    this.message = this.connector.getMessage();
  }

  ngOnInit(): void {
  }

}
