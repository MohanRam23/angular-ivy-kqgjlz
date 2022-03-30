import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{result}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name;
  @Input() arraySam;
  @Output() resc: EventEmitter<boolean> = new EventEmitter();
  public result = '';
  ngOnInit() {
    let res = this.name;
    res.forEach((element) => {
      this.result += element;
    });
    this.evenTEmit();
  }
  evenTEmit() {
    this.resc.emit(this.arraySam);
  }
}
