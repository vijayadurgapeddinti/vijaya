import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
products:any;
pid:any;
obj:any;
item_count=0
button=true;
constructor(private item :DataService){}
ngOnInit(){
  this.item.setid().subscribe((i:any)=>{this.pid=i})
  this.item.getdata().subscribe((prod)=>{this.products=prod})
  this.obj=this.products[this.products.findIndex((p:any)=>p.id==this.pid)]
}
additem(){
  this.button=false;
 } 

 ind:any;
 addre(i:any){
  this.ind=this.products.findIndex((a:any)=>a.id==i)  
  if(this.ind!=-1){
    this.products[this.ind].items+= 1;
  }

 }
 subre(i:any){
  this.ind=this.products.findIndex((a:any)=>a.id==i)  
  if(this.ind!=-1){
    this.products[this.ind].items=(this.products[this.ind].items==0)?0:
      this.products[this.ind].items-1;
  }  
}

}