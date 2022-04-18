import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CcComponent implements OnInit {

  dataToChild: string = '-----data to child-----';
  dataToChild2: string = '=====data to child=====';

  showParagraph: boolean = true;

  constructor() {}
 
  ngOnInit(): void {
  }

  onChildClick(){
    this.showParagraph = !this.showParagraph;
  }  

}
