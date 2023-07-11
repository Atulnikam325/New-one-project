import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesinangular',
  templateUrl: './directivesinangular.component.html',
  styleUrls: ['./directivesinangular.component.css']
})
export class DirectivesinangularComponent {

  show = false;
  show1 = true;
  toShowPara1!: string;
  toShowPara: string = 'poonam';
  undefinedProperty: any;
  nullProperty = null;
  toggel: boolean = true;

  constructor() {

  }

  toggelEffect() {
    let abc;
    //this.toggel = false;
    // this.toggel = !true >>false and  !false >>true
    this.toggel = !this.toggel;

  }
  cars: string[] = ['mini cup', 'jaguar', 'swift', 'marcedeez'];
  carDetails = [
    { carName: 'Swift', carPrice: 800000, color: 'white' },
    { carName: 'min cup', carPrice: 2500000, color: 'white' },
    { carName: 'marcedeez', carPrice: 8000000, color: 'white' },
    { carName: 'i10', carPrice: 500000, color: 'white' },
    { carName: 'i20', carPrice: 1000000, color: 'black' },
  ];
  tableHeadings: string[] = ['CarName', 'CarPrice', 'Color'];

  color = 'pink';
  styleCss = 'yellow2';
  test = 300;
  switchValue = 1003;


}




