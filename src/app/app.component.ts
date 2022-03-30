import { DatePipe } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  name = 'Angular ' + VERSION.major;
  public sampleForm: FormGroup;
  public studentName = [];
  public collegeName = {};
  public array = [];
  public obj;
  public resultEmit;
  public data;
  public showT = false;
  public dateForm = new Date(1988, 3, 15);
  ngOnInit() {
    this.printMethod();
    this.data = 'insert text';
    if (this.data == 1) {
      this.showT = true;
    }
    this.createForm();
  }
  submitForm() {
    if (this.sampleForm.invalid) {
      alert('invalid');
    } else {
      let val = this.sampleForm.controls;
      alert(val.firstName.value.trim());
    }
  }
  get form() {
    return this.sampleForm.controls;
  }
  createForm() {
    this.sampleForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  printMethod() {
    //this.studentName = [];
    for (let i = 0; i < 10; i++) {
      this.studentName.push(i);
      this.collegeName = { id: i, name: i + 1 };
      this.array.push(this.collegeName);
    }
    this.obj = { id: '1', name: 'has' };
  }
  selectedAudience(event) {
    event.forEach((e) => console.log(e.name));
    this.resultEmit = event;
  }
}
