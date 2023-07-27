import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  regForm:FormGroup;

  ngOnInit()
  {

    //here, writing new keyword is not a good practice.

    this.regForm=new FormGroup({

      id:new FormControl(),
      fname:new FormControl(),
      lname:new FormControl(),
      email:new FormControl(),
      mobileno:new FormControl(),

    });


  }

  register(formdata:FormGroup)
  {

    // console.log(formdata.value);

    console.log(this.regForm); //using direct variable that we used in ts file.

    //we don't need to to take data in formdata:FormGroup that we are passing from html file; (ngSubmit)="register(regForm)">

  }

}
