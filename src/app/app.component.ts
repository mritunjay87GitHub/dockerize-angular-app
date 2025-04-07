import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product } from './model/product';
import { UserServiceService } from './api-service/user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'dockerize-angular-app';

  products: Array<Product> = [];

  constructor(private userService: UserServiceService) { }
   

  ngOnInit(): void {
    
    this.userService.getAllProducts().subscribe({
      next: (productData: Array<Product>) => { 
        this.products = productData;
      },
      error: (err) => { 
        console.error(err);
       },
      complete: () => { }
    });
  }

}
