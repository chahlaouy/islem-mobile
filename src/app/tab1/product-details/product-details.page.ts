import { ProductModel } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
    sliderImages = [
      '../../../assets/sac.png',
      '../../../assets/sac.png',
      '../../../assets/sac.png',
  ]

  sliderOptions = {
      autoplay: {
          delay: 2000
      },
      loop: true
  }

  product: ProductModel;
    showData = false;


    constructor(private route: ActivatedRoute, private cartService: CartService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: ProductModel }) => {
            this.product = data.product;
            this.showData = true;
        });
    }

    addProduct(product: ProductModel) {
        this.cartService.addToCart(product);
    }

}
