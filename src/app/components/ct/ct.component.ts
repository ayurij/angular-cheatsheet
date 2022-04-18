import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tc',
  templateUrl: './ct.component.html',
  styleUrls: ['./ct.component.css']
})
export class CtComponent implements OnInit {

  dataToDisplay: string = 'data to display';

  inputText: string = '';

  showParagraph: boolean = true;

  inputText2: string = '';

  inputText3: string = '';
  textStorage: string = '';

  inputNumber: number = 0;
  numberAccumulator: number = 0;

  constructor() { }

  onKeyUp($event: any){
    this.inputText = $event.target.value;
  }

  onClick(){
    this.showParagraph = !this.showParagraph;
  }

  onClick2(){
    this.textStorage = this.inputText3;
  }

  onClick3(){
    this.numberAccumulator += this.inputNumber;
  }
  
  ngOnInit(): void {
  }

}
