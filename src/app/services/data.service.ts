import { Injectable } from '@angular/core';
import { Data } from './data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:Data[]=[
    {
        "restaurant": "Pasta Paradise",
        "item_name": "Spaghetti Carbonara",
        "price": 12.99,
        "id": 1,
        image:"https://images.pexels.com/photos/998246/pexels-photo-998246.jpeg?auto=compress&cs=tinysrgb&w=600",
        "items":1
    },
    {
        "restaurant": "Pasta Paradise",
        "item_name": "Fettuccine Alfredo",
        "price": 13.49,
        "id": 6,
           image:"https://images.pexels.com/photos/4371848/pexels-photo-4371848.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Sushi Spot",
        "item_name": "California Roll",
        "price": 8.99,
        "id": 2,
           image:"https://images.pexels.com/photos/4989366/pexels-photo-4989366.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Sushi Spot",
        "item_name": "Salmon Sashimi",
        "price": 14.99,
        "id": 7,
           image:"https://images.pexels.com/photos/4732085/pexels-photo-4732085.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Burger Haven",
        "item_name": "Cheeseburger",
        "price": 10.49,
        "id": 3,
           image:"https://images.pexels.com/photos/4392661/pexels-photo-4392661.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Burger Haven",
        "item_name": "Veggie Burger",
        "price": 9.99,
        "id": 8,
           image:"https://images.pexels.com/photos/4982432/pexels-photo-4982432.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Taco Town",
        "item_name": "Chicken Taco",
        "price": 3.99,
        "id": 4,
           image:"https://images.pexels.com/photos/4958645/pexels-photo-4958645.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Taco Town",
        "item_name": "Beef Taco",
        "price": 4.49,
        "id": 9,
           image:"https://images.pexels.com/photos/28593877/pexels-photo-28593877/free-photo-of-delicious-tacos-with-avocado-and-sour-cream.jpeg?auto=compress&cs=tinysrgb&w=600",
           "items":1
    },
    {
        "restaurant": "Pizza Place",
        "item_name": "Margherita Pizza",
        "price": 11.49,
        "id": 5,
           image:"https://images.pexels.com/photos/28646989/pexels-photo-28646989/free-photo-of-delicious-homemade-pizza-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=600"
           ,
           "items":1
        },
    {
        "restaurant": "Pizza Place",
        "item_name": "Pepperoni Pizza",
        "price": 12.99,
        "id": 10,
           image:"",
           "items":1
    },
    {
        "restaurant": "Deli Delight",
        "item_name": "Turkey Sandwich",
        "price": 7.99,
        "id": 11,
           image:"",
           "items":1
    },
    {
        "restaurant": "Deli Delight",
        "item_name": "Club Sandwich",
        "price": 8.49,
        "id": 12,
           image:"",
           "items":1
    },
    {
        "restaurant": "Curry Corner",
        "item_name": "Butter Chicken",
        "price": 14.99,
        "id": 13,
           image:"",
           "items":1
    },
    {
        "restaurant": "Curry Corner",
        "item_name": "Vegetable Biryani",
        "price": 10.99,
        "id": 14,
           image:"",
           "items":1
    },
    {
        "restaurant": "Ice Cream Island",
        "item_name": "Chocolate Sundae",
        "price": 5.49,
        "id": 15,
           image:"",
           "items":1
    },
    {
        "restaurant": "Ice Cream Island",
        "item_name": "Vanilla Cone",
        "price": 2.99,
        "id": 16,
           image:"",
           "items":1
    }
]

  constructor() { }
  getdata(){

    return of(this.data)
    
  }
  id:any;
  getid(pid:any){
     this.id=pid
     
  }
 setid(){
    console.log(this.id)
    return of(this.id);
 }

}
