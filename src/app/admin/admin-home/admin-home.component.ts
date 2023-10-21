import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  productForm: FormGroup = new FormGroup<any>('');

  constructor(private fb: FormBuilder){}
  
  initProductForm(){
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required]],
      category: [''],
      image: [''],
    });
  }

  registerProduct(){
    console.log('Product form:', this.productForm.value)
    
  }

}
