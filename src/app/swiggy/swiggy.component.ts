import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../services/data';

@Component({
  selector: 'app-swiggy',
  templateUrl: './swiggy.component.html',
  styleUrl: './swiggy.component.css'
})
export class SwiggyComponent {
  button=true;
 constructor(private item:DataService){}
 products:Data[]=[]
 ngOnInit(){

 this.item.getdata().subscribe((i:any)=>this.products=i)
 console.log(this.products)

 }
 additem(){
  this.button=false;
 } 

 ind:any;
 addre(i:any){
  this.ind=this.products.findIndex((a)=>a.id==i)  
  if(this.ind!=-1){
    this.products[this.ind].items+= 1;
  }

 }
 subre(i:any){
  this.ind=this.products.findIndex((a)=>a.id==i)  
  if(this.ind!=-1){
    this.products[this.ind].items=(this.products[this.ind].items==0)?0:
      this.products[this.ind].items-1;
  }
}
}
