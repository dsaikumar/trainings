import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'user-form-control',
  templateUrl: 'user-form-control.component.html'
})
export class UserFormControlComponent{
  name: FormControl = this.fb.control('Welcome123', [Validators.required]);
  // name: string = 'template model';
  constructor(private fb: FormBuilder){
    this.listenNameChanges();
  }
  updateName(){
    this.name.setValue('Hyderabad');
  }
  listenNameChanges(){
    this.name.valueChanges.subscribe((data:any)=>{
      console.log(data);
    });
  }
}
