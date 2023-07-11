import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
constructor(public router : Router){

}
   login(){
this.router.navigateByUrl('/login')
   } 
    
studentActivity(){
  this.router.navigateByUrl('student/student Activity')
}

directives(){

  this.router.navigateByUrl('directives')
}
form(){
  this.router.navigateByUrl('form')
}
}
