import { Component, OnInit } from '@angular/core';
import { FormControl ,FormBuilder} from '@angular/forms';
import { AddNewProductService } from '../add-new-product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  items;
  addItemForm;
  constructor(
    private addNewProductService: AddNewProductService,
    private formBuilder: FormBuilder,
  ) {
    this.addItemForm = this.formBuilder.group({
      name: '',
      price:0,
      description: ''
    });
   }

  ngOnInit() {
  }

  onSubmit(productData) {
    this.addNewProductService.addToProduct(productData);
    this.checkoutForm.reset();

    console.warn('Your Item has been added', customerData);
  }
}