import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'user-form-control',
  templateUrl: 'user-form-control.component.html'
})
export class UserFormControlComponent{
  name: FormControl = this.fb.control('Welcome123', [Validators.required]);
  loginGroup: FormGroup = this.fb.group({
    'name': this.name,
    'password': new FormControl(
      null,
      [Validators.required]
    ),
    'address': new FormGroup({
      'street': this.fb.control('Financial Dist', [Validators.required]),
      'area': this.fb.control('Hyderabad', [Validators.required])
    })
  });
  // name: string = 'template model';
  constructor(private fb: FormBuilder){
    this.listenNameChanges();
  }
  updateName(){
    this.name.setValue('Hyderabad');
  }
  formSubmitted(){
    console.log(this.loginGroup.valid, this.loginGroup.value);
  }
  listenNameChanges(){
    this.name.valueChanges.subscribe((data:any)=>{
      console.log(data);
    });
  }
}
