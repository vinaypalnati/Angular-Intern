import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  signup = new FormGroup({
    email: new FormControl(null, Validators.required),
    image: new FormControl(null, [Validators.required, requiredFileType('png')])
  });
  ngOnInit(): void {
  }

}

function requiredFileType(arg0: string): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

