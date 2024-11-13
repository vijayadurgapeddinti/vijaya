import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private item:DataService,private router:Router) {
    // Bind methods if necessary
    this.initializeEventListeners();
  }
  isOpen = false;
  email = '';
  password = '';

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onSubmit() {
    // Handle sign-in logic here
    alert(`Email: ${this.email}, Password: ${this.password}`);
    this.close();
  }
  create = true
  title = "Log in"
  text = "create an account"
  creat() {
    this.create = !this.create
    if (this.text == "create an account") {
      this.text = "log into your account"
      this.title = "Sign In"

    }
    else {
      this.text = "create an account"
      this.title = "Log In"
    }
  }
  initializeEventListeners() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
      });

      scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
      });
    } 
  }
  button=true;
  products:any;
  ngOnInit(){
 
  this.item.getdata().subscribe((i:any)=>this.products=i)

 
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
 details(pid:any){
  this.item.getid(pid);
   this.router.navigateByUrl('details');
   
 }
}