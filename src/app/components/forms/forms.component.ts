import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  textStorageA: string = '_____';
  textStorageB: string = '_____';
  textStorageC: string = '_____';
  textStorageD: string = '_____';
  textStorageE: string = '_____';

  formGroup: FormGroup;
  disableButton: boolean = true;
  showErrorMessage: boolean = false;

  inputControl: FormControl = new FormControl("", Validators.required);
  myFormGroup: FormGroup = new FormGroup({ "inputControl": this.inputControl }); 
  disableButton2: boolean = true;
  showErrorMessage2: boolean = false;


  constructor(formBilder: FormBuilder) { 
    
    this.formGroup = formBilder.group({
      'textInput': ["", Validators.required]
    });

    this.formGroup
      .valueChanges // subscribe to all changes
      .subscribe( ()=>{
        this.disableButton = this.formGroup.invalid;
        this.showErrorMessage = this.formGroup.controls['textInput'].invalid 
          && this.formGroup.controls['textInput'].touched;         
      });

    this.myFormGroup
      .valueChanges
      .subscribe(()=>{
        this.disableButton2 = this.myFormGroup.invalid;
        this.showErrorMessage2 = this.inputControl.invalid 
        && this.inputControl.touched;
      });  

  }

  ngOnInit(): void {
  }

  onClick(text: NgModel){
    this.textStorageA = `${text.value}(from ${text.name})`;
  }

  onClick2(text: NgModel){
    this.textStorageB = `${text.value}(from ${text.name})`;
  }

  onClick3(myForm: NgForm){
    this.textStorageC = myForm.value.fourth_input;
  }

  onClick4(){
    this.textStorageD = this.formGroup.controls['textInput'].value;
    this.formGroup.reset();
  }

  onClick5(){
    this.textStorageE = this.inputControl.value;
    this.myFormGroup.reset();
  }

}
