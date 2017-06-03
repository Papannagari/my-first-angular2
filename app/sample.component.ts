import {Component} from '@angular/core';

@Component({
	selector : 'sample',
	template : `
	           <div>
                <h1>This is my sample page</h1>
                <br>
                He is {{name}}
                <img [src] = "imageUrl" /><br>
                 <input type="text" name ="usrname" (keyup)="getValues($event)">
                <button class ="btn btn-primary" (click) = "runMe()">Click Me</button>
               
                </div>
	            `
})

export class SampleComponent{
	private name : string;
	private imageUrl : string;
	private value : string;
  constructor(){
  	this.name ="Papa srinivas";
  	this.imageUrl = "http://lorempixel.com/400/200"

  }
getValues(uma:any){
	this.value = uma.target.value;
console.log(uma.target.value);
}
  runMe(){
  	console.log("hey wait !!!, did you click me?");
  }
}